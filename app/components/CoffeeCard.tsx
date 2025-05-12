import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@components/ui/card";

type CoffeeCardProps = {
  image: string;
  title: string;
  description: string;
};

const CoffeeCard = (props: CoffeeCardProps) => {
  const { image, title, description } = props;

  return (
    <Card style={{ marginBottom: 10 }}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img style={{ maxHeight: 200 }} src={image} />
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  );
};
export default CoffeeCard;
