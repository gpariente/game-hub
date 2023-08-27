import { Card, CardBody, Image, Heading, Text, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIcon from "./PlatformIcon";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={"10px"} overflow={"hidden"}>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIcon>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name}
          <Emoji rating={game.rating_top}></Emoji>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
