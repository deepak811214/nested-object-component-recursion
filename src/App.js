const data = [
  {
    id: "12",
    label: "label1",
    child: [
      {
        id: "121",
        label: "label121",
        child: []
      }
    ]
  },
  {
    id: "122",
    label: "label12",
    child: [
      {
        id: "124",
        label: "labe099",
        child: [
          {
            id: "1241",
            label: "labe1241",
            child: []
          }
        ]
      }
    ]
  }
];

export default function App() {
  return (
    <div className="App">
      <Nested data={data}></Nested>
    </div>
  );
}

const Nested = function (props) {
  return (
    <>
      {props.data.map((item) => {
        return (
          <>
            {item.child?.length > 0 ? (
              <details style={{ margin: 15 }}>
                <summary>{item.label}</summary>
                <Nested data={item.child} />
              </details>
            ) : (
              <div style={{ margin: 15 }}>{item.label}</div>
            )}
          </>
        );
      })}
    </>
  );
};
