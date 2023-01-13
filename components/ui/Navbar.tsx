import Image from "next/image";
import NextLink from "next/link";
import { Link, Spacer, Text, useTheme } from "@nextui-org/react"

export const Navbar = () => {
  const { theme } = useTheme();
  console.log(`%c debug variable theme?.colors.gray900 ===>`, 'background:black;color:red', theme?.colors.gray900)
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray100.value
    }}>

      <Image 
        src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
        alt='ditto'
        width={70}
        height={70}
      />
      
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okemon</Text>
      

      <Spacer css={{flex:1}} />
     
          <Text color='white' h3>Favoritos</Text>
        
    </div>
  )
}