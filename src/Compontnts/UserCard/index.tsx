import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export interface ICard {
    id: number;
    name: string;
    src: string;
    family: string;
    balance: number;
    wallet: number;
}

function UserCard(param: ICard) {
    return (
        <Card style={{width: "18rem"}}>
            <Card.Img variant="top" src={param.src}/>
            <Card.Body>
                <Card.Title>
                    {param.name} {param.family}
                </Card.Title>
                <Card.Text>{param.balance}</Card.Text>
                <Card.Text>{param.wallet}</Card.Text>
                <Button variant="primary">Go to Wallet</Button>
            </Card.Body>
        </Card>
    );
}

export default UserCard;
