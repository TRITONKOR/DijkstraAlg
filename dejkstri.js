function dijkstra(graph, start) {
  const n = Object.keys(graph).length;
  const inf = Number.POSITIVE_INFINITY;

  let distance = {};
  let visited = {};

  Object.keys(graph).forEach(node => {
    distance[node] = inf;
    visited[node] = false;
  });

  distance[start] = 0;

  for (let count = 0; count < n - 1; count++) {
    let minDistance = inf;
    let minNode = null;

    Object.keys(graph).forEach(node => {
      if (!visited[node] && distance[node] <= minDistance) {
        minDistance = distance[node];
        minNode = node;
      }
    });

    visited[minNode] = true;

    Object.keys(graph[minNode]).forEach(neighbor => {
      if (!visited[neighbor] && distance[minNode] !== inf &&
          distance[minNode] + graph[minNode][neighbor] < distance[neighbor]) {
        distance[neighbor] = distance[minNode] + graph[minNode][neighbor];
      }
    });
  }

  return distance;
}

const graph = {
  A: { B: 4, C: 2 },
  B: { A: 8, D: 7 },
  C: { D: 6, E: 3 },
  D: { E: 1 },
  E: {}
};

const startNode = 'A';
const result = dijkstra(graph, startNode);

console.log(`Найкоротші відстані від вершини ${startNode}:`, result);