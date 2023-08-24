import { Card, CardBody, Image, Heading, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcon from "./PlatformIcon";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <PlatformIcon
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatformIcon>
      </CardBody>
    </Card>
  );
};

export default GameCard;