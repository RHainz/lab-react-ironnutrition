import style from "./style.module.css";
import { Card, Col, Button } from 'antd';

export function FoodBox({foods}) {

    return (
        <Col>
            <Card title={foods.name} style={{ width: 230, height: 300, margin: 10 }}>
                <img src={foods.image} height={60} alt="food" />
                <p>Calories: {foods.calories}</p>
                <p>Servings: {foods.servings}</p>
                <p>
                    <b>Total Calories: {foods.calories} * {foods.servings} </b> kcal
                </p>
                <Button type="primary"> Delete </Button>
            </Card>
        </Col>
    )        
}




// Iteration 2
// function FoodBox(props) {
//   return (
//     <Col>
//       <Card
//         title={'FOOD_NAME_HERE'}
//         style={{ width: 230, height: 300, margin: 10 }}
//       >
//         <img src={'FOOD_IMAGE_HERE'} height={60} alt="food" />
//         <p>Calories: FOOD_CALORIES_HERE</p>
//         <p>Servings: FOOD_SERVINGS_HERE</p>
//         <p>
//           <b>Total Calories: FOOD_CALORIES * FOOD_SERVINGS </b> kcal
//         </p>
//         <Button type="primary"> Delete </Button>
//       </Card>
//     </Col>
//   );
// }

// export default FoodBox;