function dijkstra(graph, start) {
    
    const distances = {};
    for (let vertex in graph) {
        distances[vertex] = Infinity;
    }
    distances[start] = 0; 
    
  
    const priorityQueue = [];
    priorityQueue.push({ vertex: start, distance: 0 });
    
    while (priorityQueue.length > 0) {
        
        const { vertex, distance } = priorityQueue.shift();
        
    
        for (let neighbor in graph[vertex]) {
            
            const newDistance = distance + graph[vertex][neighbor];
            
            
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
            
                priorityQueue.push({ vertex: neighbor, distance: newDistance });
            }
        }
        
        priorityQueue.sort((a, b) => a.distance - b.distance);
    }
    
    return distances;
}

// Example graph
const graph = {
    'A': { 'B': 4, 'C': 2 },
    'B': { 'A': 4, 'C': 5, 'D': 10 },
    'C': { 'A': 2, 'B': 5, 'D': 3 },
    'D': { 'B': 10, 'C': 3 }
};

// Example usage
console.log(dijkstra(graph, 'A'));
