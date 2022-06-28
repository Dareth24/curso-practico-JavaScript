const colombia =[];

function object(_name_, salary){
    this._name_ = _name_;
    this.salary = salary
}

_name_ = ["juan", "maria", "carlos", "michel", "andres", "fabian", "julio", "angie", "daniela", "mauricio", "adrian", "duban", "yiner", "juliana", "karen", "javier", "andrey", "tatiana", "david", "leidy"];
salary = [500, 1000, 1800, 1600, 1700, 600, 400, 200, 500, 900, 2000, 5000, 7000, 1900, 2000, 700, 800, 1300, 1250, 1900];

for (var i = 0; i < _name_.length; i++){
        var new_object = new object(_name_[i], salary[i]);
        colombia.push(new_object);
}
