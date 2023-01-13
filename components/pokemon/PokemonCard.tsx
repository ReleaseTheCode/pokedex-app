import { Card, Grid, Row, Text } from '@nextui-org/react'
import { SmallPokemon } from '../../interfaces'
import { useRouter } from 'next/router';

export const PokemonCard = ({ pokemon } : { pokemon: SmallPokemon } ) => {
  const { id, img, name } = pokemon;

  const router = useRouter();

  const onPokemonClick = () => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid xs={6} md={2} xl={1} key={id}>
      <Card
        isHoverable
        isPressable
        onClick={onPokemonClick}
      >
        <Card.Body css={{p:1}}>
          <Card.Image
            src={img}
            width="100%"
            height={140}
          />
        </Card.Body>
        <Card.Footer>
          <Row justify='space-between'>
            <Text>{`#${id}`}</Text>
            <Text transform='capitalize'>{name}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  )
}
