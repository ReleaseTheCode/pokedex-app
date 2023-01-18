import { useEffect, useState } from 'react';
import { Layout } from '../../components/layouts'
import  { NoFavorites } from '../../components/ui/'
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';

const FavoritePage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemon)
  }, [])
  

  return (
    <Layout title="Listado de Pokemons favoritos">
      { favoritePokemons.length === 0 && <NoFavorites /> }
      { favoritePokemons.length !== 0 &&  <FavoritePokemons pokemons={favoritePokemons} /> }
    </Layout>
  )
}

export default FavoritePage