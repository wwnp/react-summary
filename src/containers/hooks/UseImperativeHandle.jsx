import React, { useState, useRef, useImperativeHandle } from "react";
// change directions props
// transfert props up
export const UseImperativeHandle = () => {
  const [card, setCard] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [sex, setSex] = useState("")

  const cardEl = useRef(); // current = {focus() {}}
  const phoneEl = useRef();

  const validate = () => {
    if (card.length < 16) {
      setError("card");
      cardEl.current.focus(); // метод пришел снизу
      return;
    }
    if (phone.length < 11) {
      setError("phone");
      phoneEl.current.focus();
      return;
    }
    if (sex) {
      console.log(sex)
    }
    setError("");
    setSex("");
    alert('all ok')
  };
  return (
    <div>
      <h2>useImperativeHandle hook</h2>
      <TextInput
        hasError={error === "card"}
        placeholder={"Card"}
        ref={cardEl}
        value={card}
        update={setCard}
      />
      <TextInput
        hasError={error === "phone"}
        placeholder={"Phone"}
        value={phone}
        update={setPhone}
        ref={phoneEl}
      />
      <Test
        hasSex={sex === 'sex'}
        update={setSex}
      >
      </Test>
      <button onClick={validate}>Validate</button>
    </div>
  );
};
const TextInput = React.forwardRef((props, ref) => {
  const { hasError, placeholder, value, update } = props;
  const inputRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      }
    };
  });
  return (
    <input
      ref={inputRef}
      value={value}
      onChange={(e) => update(e.target.value)}
      placeholder={placeholder}
      style={{
        borderColor: hasError ? "red" : "black"
      }}
    />
  );
});
const Test = React.forwardRef((props, ref) => {
  const { hasSex, update } = props;
  return (
    <h1
      onClick={e => update('sex')}
      style={{
        color: hasSex ? 'green' : 'red'
      }}
    >
      Test
    </h1>
  )
})