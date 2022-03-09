import React, { useState, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num);
    if(n < 0) return -1;
    if(n === 0) return 1;
    return calcFatorial(n-1)*n;
}

const UseEffect = (props) => {

    // Ex #01

    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number]);

    useEffect(function() {
        if(fatorial > 1000000) {
            document.title = 'Eita!!!';
        }
    }, [fatorial]);

    // Ex #02
       
    const [value, setValue] = useState(1);

    const [status, setStatus] = useState('Ímpar');

    useEffect(function() {
        setStatus(number % 2 === 0 ? 'Par' : 'Ímpar')
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />

                <div className="center">
                    <div>
                        <span className="text">Fatorial: </span>
                        <span className="text red">{fatorial === -1 ? 'Não Existe' : fatorial}</span>
                    </div>
                    <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
                </div>

            <SectionTitle title="Exercício #02 Resolução do Prof." />

                <div className="center">
                    <div>
                        <span className="text">Status: </span>
                        <span className="text red">{status}</span>
                    </div>
                </div>

            <SectionTitle title="Exercício #02 Minha Resolução" />

                <div className="center">
                    <div>
                        <span className="text">Status: </span>
                        <span className="text red">{value % 2 === 0 ? 'Par' : 'Ímpar'}</span>
                    </div>
                    <input type="number" className="input" value={value} onChange={e => setValue(e.target.value)} />
                </div>
        </div>
    )
}

export default UseEffect
