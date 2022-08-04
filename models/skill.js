const skills = [
    {id: 111111, skill: 'HTML'},
    {id: 222222, skill: 'CSS'},
    {id: 333333, skill: 'Javascript'},
    {id: 444444, skill: 'Express'},
    {id: 555555, skill: 'MongoDB'},
    {id: 666666, skill: 'Node.js'},
];


module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function deleteOne(id) {
	const idx = skills.findIndex(skill => skill.id === parseInt(id));
	skills.splice(idx, 1);
  }

function getOne(id){
    return skills.find(skill => skill.id === parseInt(id));
}
function getAll(){
    return skills;
}

function create(skill) {
	skill.id = Date.now() % 1000000;
	skills.push(skill);
  }