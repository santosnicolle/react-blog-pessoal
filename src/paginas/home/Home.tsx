import React from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';

// Criando o corpo do nosso componente
// Nossos componentes são nada mais nada menos que funções
function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;

{/* function Home() {
    return ( //aqui dentro posso colocar tudo que eu queirá, mas um componente só pode retornar 1 elemento
        <>
            <Paper>
                <Box p={2}>
                    <Box display="flex" justifyContent="flex-start">
                        <h1>Título</h1>
                        <img src='https://media.giphy.com/media/sEx9935mTBrXSWHByf/giphy.gif'
                            alt='urso vermelho chorando animação' style={{ width:"100%", height:"100%"}} />
                    </Box>
                    <Box display="flex" justifyContent="center" p={2}>
                        <Button variant="contained" color='primary'>Texto 1</Button>
                        <Button variant="contained" color='secondary'>Texto 2</Button>
                    </Box>
                </Box>
            </Paper>
        </> //caminhos abreviados com <></>
    );
}

{/* Exemplo utilizando Grid
    function Home() {
        return ( //aqui dentro posso colocar tudo que eu queirá, mas um componente só pode retornar 1 elemento
            <>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                        <Paper style={{ height: "100vh", background: "lightgrey" }}/>
                        viewport e height - altura da tela*
                    </Grid>
                    <Grid item container direction="column" xs={12} sm={4} spacing={2}>
                        <Grid item>
                            <Paper style={{ height: "49vh", background: "orange" }}/>
                        </Grid>
                        <Grid item>
                            <Paper style={{ height: "49vh", background: "green" }}/>
                        </Grid>
                    </Grid>
                    propriedades textuais com aspas duplas " ",
                    propriedades numéricas (a menos q necessário o valor e unidade fixos)
                    fazemos com chaves { }
                </Grid>

            </> //caminhos abreviados com <></>
        );

    } */}
