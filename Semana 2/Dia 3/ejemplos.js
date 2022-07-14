const transformer = [
    {
        name: 'Optimos Prime',
        team: 'Autobot',
        form: 'Trailer'
    }
    ,{
        name: 'Boblebee',
        team: 'Autobot',
        form: 'Trailer'
    }
    ,{
        name: 'Megatron',
        team: 'Decepticon',
        form: 'Trailer'
    }
]

const names = transformer.map( (ele) => ele.name);
console.log(names);

const namesFiltros = transformer.filter(ele => ele.team == 'Autobot');
console.log(namesFiltros);


