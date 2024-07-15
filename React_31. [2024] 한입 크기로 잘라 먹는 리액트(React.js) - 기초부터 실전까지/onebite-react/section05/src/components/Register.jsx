import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  //   const [name, setName] = useState("이름");
  //   const [birth, setBirth] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [bio, setBio] = useState("");

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  // console.log("Register 렌더링");
  const inputRef = useRef();

  let count = 0;

  const onChange = (e) => {
    count++;
    console.log(count);
    countRef.current++;
    console.log(countRef.current);
    // console.log(e.target.name, e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      // console.log(inputRef.current);
      inputRef.current.focus();
    }
  };

  // console.log(input);

  const onChangeName = (e) => {
    // setName(e.target.value);
    setInput({
      ...input,
      name: e.target.value,
    });
  };

  const onChangeBirth = (e) => {
    // setBirth(e.target.value);
    setInput({
      ...input,
      birth: e.target.value,
    });
  };

  const onChangeCountry = (e) => {
    // setCountry(e.target.value);
    setInput({
      ...input,
      country: e.target.value,
    });
  };

  const onChangeBio = (e) => {
    // setBio(e.target.value);
    setInput({
      ...input,
      bio: e.target.value,
    });
  };

  return (
    <div>
      {/* <button
        onClick={() => {
          refObj.current++;
          console.log(refObj.current);
        }}
      >
        ref+1
      </button> */}

      <div>
        {/* <input value={name} onChange={onChangeName} placeholder={"이름"} /> */}
        {/* <input
          value={input.name}
          onChange={onChangeName}
          placeholder={"이름"}
        /> */}
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
        />
        {/* {name} */}
      </div>

      <div>
        {/* <input value={birth} onChange={onChangeBirth} type="date" /> */}
        {/* <input value={input.birth} onChange={onChangeBirth} type="date" /> */}
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
        {/* {birth} */}
      </div>

      <div>
        {/* <select value={country} onChange={onChangeCountry}> */}
        {/* <select value={input.country} onChange={onChangeCountry}> */}
        <select name="country" value={input.country} onChange={onChange}>
          <option></option>
          <option value="kr">한국</option>
          <option>미국</option>
          <option>영국</option>
        </select>
        {/* {country} */}
      </div>

      <div>
        {/* <textarea value={bio} onChange={onChangeBio} /> */}
        {/* <textarea value={input.bio} onChange={onChangeBio} /> */}
        <textarea name="bio" value={input.bio} onChange={onChange} />
        {/* {bio} */}
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
