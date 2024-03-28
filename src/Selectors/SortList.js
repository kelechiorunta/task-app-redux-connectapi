export const sortlist = (store) => {
    const { tasks } = store;
    if (tasks.length) {
        return [...tasks].sort((a, b) => a.id - b.id); // Sorting tasks array in ascending order
    } else {
        return tasks; // Return tasks as is if it's empty or falsy
    }
}