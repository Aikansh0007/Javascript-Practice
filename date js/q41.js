function add_years(dt,n){
    return new Date(dt.setFullYear(dt.getFullYear()+n));
}

dt=new Date();
console.log(add_years(dt, 10).toString());  
