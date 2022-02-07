// Поиск кратчайшего пути в графе

const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2, c: 5}
graph.e = {f: 1, c: 2}
graph.f = {g: 1}
graph.g = {}

function shortPath(graph, start, end) {
    const costs = {}
    const processed = []
    let neighbors = {}
    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || Infinity;
        }
    })
    let node = findNodeLowestCost(costs, processed)
    while (node) {
        const cost = costs[node]
        // console.log('node', node);
        // console.log('cost', cost);
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        processed.push(node);
        console.log('prepare', costs, processed)
        node = findNodeLowestCost(costs, processed)
        console.log('node', node);
    }
    return costs
}


function findNodeLowestCost(costs, processed) {
    return Object.entries(costs)
        .filter(x => !processed.includes(x[0]))
        .sort((a, b) => a[1] - b[1])[0]?.[0];
}

console.log(shortPath(graph, 'a', 'g'));
