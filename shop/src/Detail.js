import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components'
import './Detail.scss';

let 박스 = styled.div`
  padding : 20px;
`;
let 제목 = styled.h4`
  font-size : 25px;
  color : ${props => props.색상};
`;

const Detail = (props) => {
    let [alert, setAlert] = useState(true);

    useEffect(() => {
        let timer = setTimeout(() => {
            setAlert(false);
        }, 2000);

        return () => { clearTimeout(timer) };

    }, [alert]); //[] 인 경우 이 컴포넌트가 처음 랜더링 될 때만 실행


    let { id } = useParams();
    let history = useHistory();
    let shoes = props.shoes.find((el) => {
        return el.id == id;
    })
    // MyCode
    // function findId (id) {

    //     for (var i = 0; i < props.shoes.length; i++) {
    //         if (props.shoes[i].id == id) {
    //             return i;
    //         }
    //     }
    // }
    return (
        <div className="container">
            <박스>
                <제목 색상="red">Detail</제목>
            </박스>

            {
                alert === true
                    ? (<div className="my-alert-yellow">
                        <p>재고가 얼마 남지 않았습니다!!</p>
                    </div>) : null
            }


            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + (shoes.id + 1) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{shoes.title}</h4>
                    <p>{shoes.content}</p>
                    <p>{shoes.price}</p>

                    <Info stock={props.stock} />
                    <button className="btn btn-danger" onClick={() => { props.setStock([9, 11, 12]) }}>Order</button>
                    <button className="btn btn-danger" onClick={() => {
                        history.push('/');
                    }}>Back</button>
                </div>
            </div>
        </div>
    )

}

function Info (props) {
    return (
        <p>Stock:{props.stock[0]}</p>
    )
}

export default Detail;