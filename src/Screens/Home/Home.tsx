import { FlatList, Image, View } from 'react-native';
import { Text } from '../../Components/Text';
import {
  Container,
  Header,
  Highlights,
  HeaderOptions,
  GameItem,
  GameCard,
  GameCardContent,
  Posts,
  Post,
  PostHeader,
  PostContent,
  PostFooter,
} from './styles';
import ChatIcon from '../../utils/icons/chatIcon.svg';
import NotificationIcon from '../../utils/icons/notificationIcon.svg';
import LogoSwapPlay from '../../utils/icons/logoRoxa.svg';
import ArrowRight from '../../utils/icons/arrowRight.svg';
import CommentIcon from '../../utils/icons/commentIcon.svg';
import ShareIcon from '../../utils/icons/shareIcon.svg';
import SaveIcon from '../../utils/icons/saveIcon.svg';
import ClockIcon from '../../utils/icons/clockIcon.svg';
import { OptionIcon } from './Components/OptionIcon';
import { Button } from '../../Components/Button';
import { useAuth } from '../../hooks/useAuth';

const games = [
  { id: 1, imageUrl: require('../../utils/images/games/god_of_war.jpg') },
  { id: 2, imageUrl: require('../../utils/images/games/starfield.jpg') },
  { id: 3, imageUrl: require('../../utils/images/games/zelda.jpg') },
  { id: 4, imageUrl: require('../../utils/images/games/mortal.png') },
  { id: 5, imageUrl: require('../../utils/images/games/baldurs.png') },
];

const gamesCard = [
  {
    id: 1,
    title: 'God of War: Ragnarök',
    description: 'God of War: Ragnarök já está disponível para PS4 e PS5.',
    imageUrl: require('../../utils/images/games/god_of_war.jpg'),
  },
  {
    id: 2,
    title: 'Starfield',
    description: 'Starfield já está disponível para Xbox Series X|S.',
    imageUrl: require('../../utils/images/games/starfield.jpg'),
  },
  {
    id: 3,
    title: "Baldur's Gate 3",
    description:
      "Baldur's Gate 3 já está disponível para PS5 e Xbox Series X|S.",
    imageUrl: require('../../utils/images/games/baldurs.png'),
  },
];

export function Home() {
  const { signout } = useAuth();

  return (
    <Container showsVerticalScrollIndicator={false}>
      <Header>
        <LogoSwapPlay />

        <HeaderOptions>
          <ChatIcon />
          <NotificationIcon />
          <Image
            width={36}
            height={36}
            style={{ borderRadius: 18 }}
            source={{
              uri: 'https://avatars.githubusercontent.com/u/61169118?v=4',
            }}
          />
        </HeaderOptions>
      </Header>

      <Button label="Sair" onPress={signout} />

      <Text
        size={16}
        color="#2E3E4B"
        weight="600SemiBold"
        style={{ marginVertical: 16, marginLeft: 16 }}
      >
        Itaquera
      </Text>

      <Highlights>
        <Text
          color="#2E3E4B"
          size={30}
          weight="700Bold"
          style={{ marginLeft: 16 }}
        >
          Destaques
        </Text>

        <FlatList
          data={games}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8, paddingHorizontal: 16 }}
          renderItem={({ item }) => (
            <GameItem>
              <Image
                resizeMode="cover"
                source={item.imageUrl}
                style={{
                  width: 110,
                  height: 144,
                  borderRadius: 5,
                }}
              />
            </GameItem>
          )}
        />

        <FlatList
          data={gamesCard}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 8, paddingHorizontal: 16 }}
          renderItem={({ item }) => (
            <GameCard>
              <GameCardContent>
                <Text color="#2E3E4B" size={16} weight="600SemiBold">
                  {item.title}
                </Text>
                <Text
                  color="#595959"
                  size={12}
                  weight="400Regular"
                  style={{ maxWidth: 230 }}
                >
                  {item.description}
                </Text>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <Text color="#2E3E4B" size={14} weight="400Regular">
                    Ver Anúncios...
                  </Text>
                  <ArrowRight />
                </View>
              </GameCardContent>

              <Image
                resizeMode="cover"
                source={item.imageUrl}
                style={{
                  width: 105,
                  height: 144,
                  borderRadius: 5,
                }}
              />
            </GameCard>
          )}
        />
      </Highlights>

      <Text
        color="#2E3E4B"
        size={30}
        weight="700Bold"
        style={{ marginLeft: 16, marginTop: 16 }}
      >
        Anúncios
      </Text>

      <Posts>
        <Post>
          <PostHeader>
            <View
              style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}
            >
              <Image
                width={36}
                height={36}
                style={{ borderRadius: 18 }}
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/61169118?v=4',
                }}
              />
              <View>
                <Text color="#2E3E4B" size={16} weight="600SemiBold">
                  @Joao_Victor
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 4,
                    alignItems: 'center',
                  }}
                >
                  <ClockIcon />
                  <Text color="#595959" size={12} weight="400Regular">
                    5 Minutos
                  </Text>
                </View>
              </View>
            </View>

            <OptionIcon />
          </PostHeader>
          <PostContent>
            <Text color="#595959" size={14} weight="400Regular">
              Troco Starfield por Forza Horizon 5, Vem de chat!
            </Text>

            <View style={{ alignSelf: 'center' }}>
              <Image
                height={400}
                width={320}
                style={{ borderRadius: 10 }}
                resizeMode="cover"
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/4b30/ada1/b26693fb4fe9c276d8b358a69a2ff46e?Expires=1704672000&Signature=XseKRmMwSlbWixoPVhDFfNGAKPeQ1g-AGnZFvFk3fGAvXT617Up~IzdG6zXBZuN5MhJudS883fkXw6R63J5VPgicckn6~srZ~1DGrT4wmj8JjpvFXf1QxSes2cM48Cqy0VJwmvGKNtBuJud-~sWe1Bz5cIFTPhMZhKPUDbSEnw4DLUgrbbTMuu~EVVjTMQQDKmmSxNcAsiVQ2x~IF2he8L6gZ~fK6SOr2hgwS7mc2CfojhL0rGSCBIqUKNWW95zvkumYWpwfinGzXdqtGNoI-JWXLMPwyZWnORcgb9cK71scuCHVbp8GCL2~T93mt3KyElUwF37Dod9TEH3V9Kd7kQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
                }}
              />
            </View>
          </PostContent>

          <PostFooter>
            <View>
              <Text size={14} color="#595959" weight="400Regular">
                5 Comentários
              </Text>
            </View>

            <View style={{ flexDirection: 'row', gap: 18 }}>
              <CommentIcon />
              <SaveIcon />
              <ShareIcon />
            </View>
          </PostFooter>
        </Post>
      </Posts>
    </Container>
  );
}
