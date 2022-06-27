import React from 'react';
import { useState } from 'react';
import sound1 from './Sound/moretime.mp3'
import sound2 from './Sound/audio_2022-06-18_04-12-16.ogg'
import { style } from '@mui/system';
import MescVoz from './MescVoz';

export default function Mesc() {

    const [suposmanhã, setSuposmanhã] = useState ('');
    const [supostarde, setSupostarde] = useState ('');
    const [suposnoite, setSuposnoite] = useState ('');
   


    function Suposiçãomanhã () {
       setSuposmanhã( <>
       <audio controls autoPlay style={{positio:'static', display:'none'}} > <source controls src={sound2} type='audio/ogg' /> </audio>
       <MescVoz /> 
       </>)
    };

    function Suposiçãotarde () {
        setSupostarde( <>
        <audio controls autoPlay style={{positio:'static', display:'none'}} > <source controls src={sound2} type='audio/ogg' /> </audio>
        <MescVoz /> 
        </>)
     };

     function Suposiçãonoite () {
        setSuposnoite( <>
        <audio controls autoPlay style={{positio:'static', display:'none'}} > <source controls src={sound2} type='audio/ogg' /> </audio>
        <MescVoz /> 
        </>)
     };

     function Rejeitado () {
        return <>
            {Cumprimento(style={display:'none'})}
        </>
     }




    const Cumprimento = ()=> {
          const hora = new Date().getHours()

        if(hora >=6 && hora <13 ) {
            return <>
            <div style={{textAlign:'center'}}>
            <h5>Atendimento ao Cliente está disponível, fechará às 18 horas.</h5>
            <h5>Olá, Bom dia, eu sou o MESC, assistente digital, posso ajuda-lo?</h5>
            <button onClick={Suposiçãomanhã} style={{width:'20%', backgroundColor:'#696969', color:'#00FFFF'}}>Sim </button>
            <button onClick={Rejeitado} style={{width:'20%', backgroundColor:'#696969', color:'#00FFFF'}}>Não</button>
            {suposmanhã}
            </div>
            </>
        } else if (hora > 13 && hora < 18) {
            return <>
            <div style={{textAlign:'center'}}>
            <h5>Atendimento ao Cliente está disponível, fechará às 18 horas.</h5>
            <h5>Olá, Boa Tarde, eu sou o MESC, assistente digital, posso ajuda-lo?</h5>
            <button onClick={Suposiçãotarde} style={{width:'20%', backgroundColor:'#696969', color:'#00FFFF'}}>Sim </button>
            <button style={{width:'20%', backgroundColor:'#696969', color:'#00FFFF'}}>Não</button>
            {supostarde}
            </div>
            </>
        } else {
            return <>
            <div style={{textAlign:'center'}}>
            <h5>O Atendimento ao cliente está <span style={{color:'red'}}>fechado</span>, abrirá às 8 horas.</h5>
            <h5>Olá, Boa Noite, eu sou o MESC, assistente digital, posso ajuda-lo?</h5>
            <button onClick={Suposiçãonoite} style={{width:'20%', backgroundColor:'#696969', color:'#00FFFF'}}>Sim </button>
            <button style={{width:'20%', backgroundColor:'#696969', color:'#00FFFF'}}>Não</button>
            {suposnoite}
            </div>
            </>
        }
    
    }

    

    
        const Supos = () => {
          // var today = new Date().getDay()
            var today = 0
            switch (today) {
                case 0:
                    return <><h6>A loja está Fechada, abre na segunda-feira</h6></>;
                    break;
                case 1:
                    return <p>Segunda</p>;
                    break;
                case 2:
                    return <p>Terça-Feira</p>;
                    break;
                case 3:
                    return <p>Quarta-Feira</p>;
                    break;
                case 4:
                    return <p>Quinta-Feira</p>;
                    break;
                case 5:
                    return <> <p>Hoje é Sexta-Feira</p>
                    </>;
                    break;
                case 6:
                    return <><p>Sábado</p></>
                    break;           
            }

        }

    
    

    return (
        <>
                <div style={{display:'block'}}>{Cumprimento()}</div>   
        </>
    );
}