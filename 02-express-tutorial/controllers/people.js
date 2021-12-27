const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
}

const createPerson = (req, res) => {
    const { name } = req.body;
    // if the name is not provided
    if (!name) {
        return res.status(400).json({ success: false, msg: 'name is required' });
    }
    res.status(201).json({ success: true, person: name });
}

const updatePerson = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const person = people.find(person => person.id === parseInt(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: 'person not found' });
    }
    newPerson = people.map(person => {
        if (person.id === parseInt(id)) {
            return res.status(200).json({ ...person, name });
        }
    });
}

const deletePerson = (req, res) => {
    const { id } = req.params;
    const person = people.find(person => person.id === parseInt(id));
    if (!person) {
        return res.status(404).json({ success: false, msg: 'person not found' });
    }
    const newPeople = people.filter(person => person.id !== parseInt(id));
    res.status(200).json({ success: true, data: newPeople });
}


module.exports = {
    getPeople,
    createPerson,
    updatePerson,
    deletePerson
}