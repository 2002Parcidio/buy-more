import React from 'react';
import { useState } from 'react';
import sound1 from './Sound/moretime.mp3'
import sound2 from './Sound/audio_2022-06-18_04-12-16.ogg'
import sound3 from './Sound/06-Pop-Smoke.mp3'


export default function Voz() {

    const [primeiro, setPrimeiro] = useState ('');
    const [segundo, setSegundo] = useState ('');
    const [terceiro, setTerceiro] = useState ('');
    const [quarto, setQuarto] = useState ('');
    const [quinto, setQuinto] = useState ('');
    const [sexto, setSexto] = useState ('');
    const [setimo, setSetimo] = useState ('');
    const [oitavo, setOitavo] = useState ('');

    
    // Sound 1
    function First () {
        setPrimeiro( <>
            <audio controls autoPlay style={{position:'static', display:'none'}} > <source controls src={sound1} type='audio/mp3' /> </audio>
         </>);
            setSegundo();
            setTerceiro();
    };

    // Sound 2
    function Second () {
      setSegundo( <>
        <audio controls autoPlay style={{position:'static', display:'none'}}> <source controls src={sound3} type='audio/mp3' /> </audio>
      </>);
         setPrimeiro();     
         setTerceiro();
     };

     // Sound 3
    function Third () {
      setTerceiro( <>
         <audio controls autoPlay style={{position:'static', display:'none'}} > <source controls src={sound2} type='audio/ogg' /> </audio> 
      </>);
         setPrimeiro();
         setSegundo();
     };

     // Sound 4
     function Fourth () {
      setQuarto(<>
      </>);
         setPrimeiro();
         setSegundo();
         setTerceiro();
         setQuinto();
         setSexto();
         setSetimo();
         setOitavo();
     }

      // Sound 5
      function Fifth () {
         setQuinto(<>
         </>);
            setPrimeiro();
            setSegundo();
            setTerceiro();
            setQuarto();
            setSexto();
            setSetimo();
            setOitavo();
        }

         // Sound 6
     function Sixth () {
      setSexto(<>
      </>);
         setPrimeiro();
         setSegundo();
         setTerceiro();
         setQuarto();
         setQuinto();
         setSetimo();
         setOitavo();
     }

      // Sound 7
      function Seventh () {
         setSetimo(<>
         </>);
            setPrimeiro();
            setSegundo();
            setTerceiro();
            setQuarto();
            setQuinto();
            setSexto();
            setOitavo();
        }

         // Sound 8
     function Eigth () {
      setOitavo(<>
      </>);
         setPrimeiro();
         setSegundo();
         setTerceiro();
         setQuarto();
         setQuinto();
         setSexto();
         setSetimo();
     }



     const Perguntas = ()=> {
    
        // const hora = new Date().getHours()

           return <>
           <div style={{textAlign:'center'}}>
           <div className='' style={{marginLeft:'25%', marginRight:'25%'}}>
                <button onClick={First} style={{width:'100%', textAlign:'center', color:'antiquewhite', backgroundColor:'#696969', fontSize:'30px', marginTop:'2%',}}>
                   Thegreat is unbelivable 
                </button>
                {primeiro}

                <button onClick={Second} style={{width:'100%',  display:'', textAlign:'center', color:'antiquewhite', backgroundColor:'#696969', fontSize:'30px', marginTop:'2%',}}>
                   Quando foi fundada a buymore? 
                </button>
                {segundo}

                <button onClick={Third} style={{width:'100%',  display:'grid', textAlign:'center', color:'antiquewhite', backgroundColor:'#696969', fontSize:'30px', marginTop:'2%',}}>
                   Onde estão localizados?
                </button>
                {terceiro}

                <button onClick={Fourth} style={{width:'100%',  display:'grid', textAlign:'center', color:'antiquewhite', backgroundColor:'#696969', fontSize:'30px', marginTop:'2%',}}>
                   É necessário cartões de crédito para fazer a compra dos produtos? 
                </button>
                {quarto}

                <button style={{width:'100%',  display:'grid', textAlign:'center', color:'antiquewhite', backgroundColor:'#696969', fontSize:'30px', marginTop:'2%',}}>
                   Quem desenvolveu este belo site? 
                </button>
                {quinto}

                <button style={{width:'100%',  display:'grid', textAlign:'center', color:'antiquewhite', backgroundColor:'#696969', fontSize:'30px', marginTop:'2%',}}>
                   Quantos funcionários tem a empresa? 
                </button>
                {sexto}

                <button style={{width:'100%',  display:'grid', textAlign:'center', color:'antiquewhite', backgroundColor:'#696969', fontSize:'30px', marginTop:'2%',}}>
                   Quem é o Parcídio?
                </button>
                {setimo}

                <button style={{width:'100%',  display:'grid', textAlign:'center', color:'antiquewhite', backgroundColor:'#696969', fontSize:'30px', marginTop:'2%',}}>
                   Fazem entregas nacionais e internacionais? 
                </button>
                {oitavo}
            </div>
            </div>
            </>
}

return (
    <>
            {Perguntas()}
    </>
);

}
