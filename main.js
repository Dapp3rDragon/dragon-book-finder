// === Global Variables ===
const selectedTags = new Set();
const tagContainer = document.getElementById('tag-container');
const bookList = document.getElementById('book-list');
const sortSelect = document.getElementById('sort-select');
const darkModeToggle = document.getElementById('darkModeToggle');
const graphContainer = document.getElementById('graph-wrapper');
const svg = d3.select("#graph");
const body = document.body;


let node, link, label;
let selectedNode = null;
let clickStartPos = null;

// === Dark Mode ===
function setDarkMode(enabled) {
    if (enabled) {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️ Light Mode';
        localStorage.setItem('darkMode', 'true');
    } else {
        body.classList.remove('dark-mode');
        darkModeToggle.textContent = '🌙 Dark Mode';
        localStorage.setItem('darkMode', 'false');
    }
}
darkModeToggle.addEventListener('click', () => setDarkMode(!body.classList.contains('dark-mode')));
if (localStorage.getItem('darkMode') === 'true') setDarkMode(true);

// === Tooltip Panel Handlers ===
function showTooltip(content) {
    const panel = document.getElementById('tooltip-panel');
    panel.innerHTML = content;
    panel.style.display = 'block';
    drawGraph();  // <-- Recalculate graph width when tooltip becomes visible
}

function hideTooltip() {
    const panel = document.getElementById('tooltip-panel');
    panel.style.display = 'none';
    drawGraph();  // <-- Recalculate graph width when tooltip is hidden
}

// === Filter UI ===
function createFilterUI() {
    tagContainer.innerHTML = '';

    Object.entries(tagGroups).forEach(([category, tags]) => {
        const section = document.createElement('div');
        section.className = 'accordion-section';

        const header = document.createElement('div');
        header.className = 'accordion-header';
        header.textContent = category;

        const content = document.createElement('div');
        content.className = 'accordion-content';

        tags.forEach(tag => {
            const label = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = tag;
            label.appendChild(checkbox);
            label.append(` ${tag}`);
            content.appendChild(label);

            checkbox.addEventListener('change', () => {
                checkbox.checked ? selectedTags.add(tag) : selectedTags.delete(tag);
                renderBooks();
            });
        });

        header.addEventListener('click', () => {
            const isOpen = content.style.display === 'block';
            content.style.display = isOpen ? 'none' : 'block';
            header.classList.toggle('active', !isOpen);
        });

        section.appendChild(header);
        section.appendChild(content);
        tagContainer.appendChild(section);
    });

    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear Filters';
    clearButton.className = 'clear-button';
    clearButton.onclick = () => {
        selectedTags.clear();
        document.querySelectorAll('#tag-container input[type=checkbox]').forEach(cb => cb.checked = false);
        renderBooks();
    };
    tagContainer.appendChild(clearButton);
}

// === Book List Rendering ===
function renderBooks() {
    const activeTags = Array.from(selectedTags);
    let filtered = books.filter(book => activeTags.every(tag => book.tags.includes(tag)));

    const sortValue = sortSelect.value;
    if (sortValue === 'title') filtered.sort((a, b) => a.title.localeCompare(b.title));
    else if (sortValue === 'author') filtered.sort((a, b) => a.author.localeCompare(b.author));
    else if (sortValue === 'year') filtered.sort((a, b) => b.year - a.year);
    else if (sortValue === 'length') filtered.sort((a, b) => a.length - b.length);

    bookList.innerHTML = filtered.length
        ? filtered.map(book => `
            <div class="book">
                <div class="book-title">${book.title}</div>
                <div class="book-author">by ${book.author} (${book.year}) · ${book.length.toLocaleString()} words</div>
                <div class="book-tags">${book.tags.map(t => `<span>${t}</span>`).join('')}</div>
            </div>`).join('')
        : '<p>No books match your selected tags. Try fewer filters!</p>';
}
sortSelect.addEventListener('change', renderBooks);

// === Graph Similarity Weights ===
const weights = {
    "Audience": 5, "Tone/Theme": 10, "Subgenre": 9, "Pacing": 5,
    "POV/Character": 8, "Dragon Involvement": 8, "Plot Elements": 9,
    "Romance": 3, "Violence": 2, "Magic": 5, "Worldbuilding": 7,
    "Social Themes": 3, "Series Length & Completion": 2,
    "Format": 2, "Mature Content": 1, "Content Warnings": 0
};

const MAX_LINKS_PER_NODE = 10;
const MIN_LINKS_PER_NODE = 3;
const MIN_SIMILARITY_SCORE = 100;

function getWeightedSimilarity(a, b) {
    return Object.keys(tagGroups).reduce((score, cat) => {
        const shared = tagGroups[cat].filter(tag => a.tags.includes(tag) && b.tags.includes(tag));
        return score + (shared.length * (weights[cat] ?? 1));
    }, 0);
}

// === D3 Drag Behavior ===
function drag(simulation) {
    function dragstarted(event) {
        clickStartPos = { x: event.x, y: event.y };
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }

    function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
    }

    function dragended(event) {
        const dx = event.x - clickStartPos.x;
        const dy = event.y - clickStartPos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (!event.active) simulation.alphaTarget(0);
        if (distance > 3) {
            event.subject.fx = null;
            event.subject.fy = null;
        }
    }

    return d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended);
}

// === Highlight Selected Node and Neighbors ===
function updateHighlight() {
    node.attr("r", d => selectedNode && (d.id === selectedNode.id) ? 12 : 7)
        .attr("stroke", d => selectedNode && (d.id === selectedNode.id) ? "#c9974d" : "#fff")
        .attr("stroke-width", d => selectedNode && (d.id === selectedNode.id) ? 3 : 1.2);

    link.attr("stroke", d => (selectedNode && (d.source.id === selectedNode.id || d.target.id === selectedNode.id)) ? "#c9974d" : "#999")
        .attr("stroke-opacity", d => (selectedNode && (d.source.id === selectedNode.id || d.target.id === selectedNode.id)) ? 0.8 : 0.3)
        .attr("stroke-width", d => (selectedNode && (d.source.id === selectedNode.id || d.target.id === selectedNode.id)) ? 2 : 1);

    label.attr("font-size", d => selectedNode && (d.id === selectedNode.id) ? '13px' : '9px');
}

function showTooltipPanel(nodeData) {
    const panel = document.getElementById('tooltip-panel');
    if (!nodeData) {
        panel.classList.add('hidden');
        panel.innerHTML = '';
        return;
    }

    const sharedTagGroups = Object.entries(tagGroups).map(([category, tags]) => {
        const shared = tags.filter(tag => nodeData.tags.includes(tag));
        return shared.length ? { category, tags: shared } : null;
    }).filter(Boolean);

    const similarityScores = books
        .map(book => ({
            title: book.title,
            score: getWeightedSimilarity(nodeData, book)
        }))
        .filter(b => b.title !== nodeData.title)
        .sort((a, b) => b.score - a.score)
        .slice(0, 5);

    panel.innerHTML = `
        <h3>${nodeData.title}</h3>
        <div><strong>Top Similar Books:</strong>
            <ul>${similarityScores.map(s => `<li>${s.title} (${s.score})</li>`).join('')}</ul>
        </div>
        ${sharedTagGroups.map(group => `
            <div class="tag-group">
                <strong>${group.category}</strong>
                <div class="tags">${group.tags.map(t => `<span>${t}</span>`).join('')}</div>
            </div>
        `).join('')}
    `;
    panel.classList.remove('hidden');
}


// === Draw Force-Directed Graph ===
function drawGraph() {
    svg.selectAll("*").remove();
    const g = svg.append("g");
    const tooltipPanel = document.getElementById('tooltip-panel');
    const width = graphContainer.clientWidth - (tooltipPanel?.offsetWidth || 0);
    const height = +svg.attr("height");

    // 🌈 Rainbow gradient color scale based on x-axis position
    const colorScale = d3.scaleSequential(d3.interpolateRainbow).domain([0, width]);

    const nodes = books.map(book => ({
        id: book.title,
        title: book.title,
        tags: book.tags
    }));

    const connectionCount = {};  // Track links per node

    const links = [];

    books.forEach((bookA, i) => {
        const scoredLinks = books.map((bookB, j) => ({
            score: i === j ? -1 : getWeightedSimilarity(bookA, bookB),
            target: bookB.title
        }))
            .filter(s => s.score > 0) // Ignore zero/negative scores
            .sort((a, b) => b.score - a.score);

        // Select top links that exceed threshold
        const strongLinks = scoredLinks.filter(s => s.score >= MIN_SIMILARITY_SCORE).slice(0, MAX_LINKS_PER_NODE);

        // If not enough strong links, fill up to MIN_LINKS_PER_NODE with weaker links
        const finalLinks = strongLinks.length >= MIN_LINKS_PER_NODE
            ? strongLinks
            : scoredLinks.slice(0, Math.max(strongLinks.length, MIN_LINKS_PER_NODE));

        finalLinks.forEach(s => {
            const source = bookA.title;
            const target = s.target;

            connectionCount[source] = (connectionCount[source] || 0);
            connectionCount[target] = (connectionCount[target] || 0);

            // Skip if either node already has max connections
            if (connectionCount[source] >= MAX_LINKS_PER_NODE || connectionCount[target] >= MAX_LINKS_PER_NODE) return;

            // Avoid duplicates
            if (!links.some(l => (l.source === target && l.target === source))) {
                links.push({ source, target, value: s.score });
                connectionCount[source]++;
                connectionCount[target]++;
            }
        });

    });


    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id).distance(150).strength(0.5))
        .force("charge", d3.forceManyBody().strength(-200))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide(20));

    const zoom = d3.zoom()
        .scaleExtent([0.2, 3])
        .on("zoom", event => g.attr("transform", event.transform));
    svg.call(zoom);

    svg.on("click", (event) => {
        if (event.target.tagName === 'svg') {
            selectedNode = null;
            updateHighlight();
            showTooltipPanel(null);
        }
    });

    let pointerDownPos = null;

    link = g.append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.4)
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke-width", 1);

    node = g.append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 1.2)
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", 7)
        .attr("fill", d => colorScale(d.x || width / 2))
        .call(drag(simulation))
        .on("pointerdown", (event) => {
            pointerDownPos = { x: event.clientX, y: event.clientY };
        })
        .on("pointerup", (event, d) => {
            const dx = event.clientX - pointerDownPos.x;
            const dy = event.clientY - pointerDownPos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 5) {
                selectedNode = (selectedNode === d) ? null : d;
                updateHighlight();
                showTooltipPanel(selectedNode);
            }

        })
        .on("mouseover", function (event, d) {
            const tooltip = document.createElement('div');
            tooltip.id = "tooltip";
            tooltip.style.position = "absolute";
            tooltip.style.padding = "8px 12px";
            tooltip.style.background = "rgba(0, 0, 0, 0.85)";
            tooltip.style.color = "#fff";
            tooltip.style.borderRadius = "6px";
            tooltip.style.pointerEvents = "none";
            tooltip.style.fontSize = "13px";
            tooltip.style.maxWidth = "300px";
            tooltip.style.lineHeight = "1.4";
            tooltip.style.zIndex = 1000;

            // === Content ===
            let content = `<strong>${d.title}</strong>`;

            if (selectedNode && selectedNode.id !== d.id) {
                const otherBook = books.find(b => b.title === d.title);
                const selectedBook = books.find(b => b.title === selectedNode.id);
                const similarity = getWeightedSimilarity(otherBook, selectedBook);

                // Gather shared tags by category
                const sharedTagsByGroup = Object.entries(tagGroups).reduce((acc, [category, tags]) => {
                    const shared = tags.filter(tag => otherBook.tags.includes(tag) && selectedBook.tags.includes(tag));
                    if (shared.length) acc.push(`<em>${category}:</em> ${shared.join(", ")}`);
                    return acc;
                }, []);

                content += `<br><br><strong>Similarity Score:</strong> ${similarity}`;
                if (sharedTagsByGroup.length) {
                    content += `<br><strong>Shared Tags:</strong><br>${sharedTagsByGroup.join("<br>")}`;
                } else {
                    content += `<br><em>No shared tags</em>`;
                }
            } else {
                content += `<br><br><em>Click another node to compare.</em>`;
            }

            tooltip.innerHTML = content;
            document.body.appendChild(tooltip);

            // Tooltip movement
            function moveTooltip(e) {
                tooltip.style.left = e.pageX + 12 + "px";
                tooltip.style.top = e.pageY + 12 + "px";
            }
            document.addEventListener('mousemove', moveTooltip);
            this._tooltipMove = moveTooltip;
        })
        .on("mouseout", function () {
            const tooltip = document.getElementById("tooltip");
            if (tooltip) tooltip.remove();
            document.removeEventListener('mousemove', this._tooltipMove);
        });



    label = g.append("g")
        .selectAll("text")
        .data(nodes)
        .join("text")
        .text(d => d.title)
        .attr("font-size", "9px")
        .attr("text-anchor", "middle")
        .attr("dy", -12)
        .style("fill", "#333")
        .style("paint-order", "stroke")
        .style("stroke", "#fff")
        .style("stroke-width", "2px");

    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y)
            .attr("fill", d => colorScale(d.x || width / 2));  // 🌈 Apply rainbow fill here

        label
            .attr("x", d => d.x)
            .attr("y", d => d.y - 12);
    });
}

// === Graph Toggle ===
function toggleGraph() {
    const wrapper = document.getElementById('graph-wrapper');
    if (wrapper.style.display === 'none') {
        wrapper.style.display = 'flex';
        drawGraph();
    } else {
        wrapper.style.display = 'none';
    }
}

window.toggleGraph = toggleGraph;

// === Resize Redraw ===
window.addEventListener('resize', () => {
    if (graphContainer.style.display === 'block') drawGraph();
});

// === Initialize ===
createFilterUI();
renderBooks();
