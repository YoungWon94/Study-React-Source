import React,{useState, useEffect} from 'react';

const Info = () => {

    const [name,setName] = useState('');
    const [nickName,setNickName] = useState('');

    useEffect(()=>{
        console.log('===렌더링 완료===');
        console.log({name, nickName});
        return() =>{
            console.log('---cleanup---');
            console.log({name, nickName});
        } 
    });

    const onChange = (e)=>{
        if(e.target.name === 'name') setName(e.target.value);
        else if(e.target.name === 'nickName') setNickName(e.target.value);
    }

    return (
        <div>
            <input value={name} onChange={onChange} name="name"/>
            <input value={nickName} onChange={onChange} name="nickName"/>
            <p> 이름 : {name} </p>
            <p> 닉네임 : {nickName} </p>
        </div>
    );
};

export default Info;