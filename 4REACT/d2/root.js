// const ele = React.createElement("h1",{},"hello");
// const div = document.getElementById("root");
// const root = ReactDOM.createRoot(div);
// root.render(ele);

// const p = React.createElement("p",{},"loremh diuhue");
// root.render(ele,p); error

// ek saath doonno div me bna lo
const div = React.createElement("div",{},
    React.createElement("h1",{},"hello"),
    React.createElement("p",{},"adiufhweufeui")
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);



