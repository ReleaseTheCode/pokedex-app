import { useRouter } from "next/router";
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { Layout } from "../../components/layouts";
import { pokeApi } from "../../api";
import { Pokemon } from '../../interfaces/pokemon-full';
import { Grid, Card, Text, Button, Container } from '@nextui-org/react';
import Image from "next/image";

interface Props {
 pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const { query } = useRouter();
  console.log(`%c debug variable query ===>`, 'background:black;color:red', query)
  const {
    name, id,
    sprites
  } = pokemon;
  return (
    <Layout title={`Pokemon #${id}`}>

      <Grid.Container css={{ marginTop: '5px' }} gap={ 2 }>
        <Grid xs={12} sm={4}>
          <Card isHoverable css={{padding:'30px'}}>
            <Card.Body>
              <Card.Image
                src={sprites.other?.dream_world.front_default || sprites.front_default }
                alt={name}
                width="100%"
                height={200}
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header
              css={{display: 'flex', justifyContent: 'space-between'}}
            >
              <Text h1 transform="capitalize">{name}</Text>
              <Button
                color='gradient'
                ghost
              >
                Guardar en favoritos
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container display='flex' justify='space-around'>
                <Image
                  src={ sprites.front_default}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={ sprites.back_default}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={ sprites.front_shiny}
                  alt={name}
                  width={100}
                  height={100}
                />
                <Image
                  src={ sprites.back_shiny}
                  alt={name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {
  //const { data } = await  // your fetch function here 
  const pokemonKanto = [...Array(151)].map((_,index) => `${ index + 1 }` );
  return {
    paths: pokemonKanto.map( id => ({
      params: {id:id}
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(`%c debug variable params ===>`, 'background:black;color:red', params)
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`)

  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage;
