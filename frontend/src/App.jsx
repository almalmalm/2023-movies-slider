import {
  Box,
  Button,
  Container,
  Input,
  Typography,
  Paper,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useState } from 'react';

import { useGetTrendsQuery } from './store/moviesApi';

function App() {
  const [carousel, setCarousel] = useState(0);

  let firstItem = carousel;
  let lastItem = carousel + 5;

  const windowWidth = window.innerWidth;
  if (windowWidth < 840) {
    lastItem = carousel + 1;
  } else if (windowWidth > 840 && windowWidth < 1040) {
    lastItem = carousel + 3;
  } else if (windowWidth > 1040 && windowWidth < 1200) {
    lastItem = carousel + 4;
  }

  const { data, isLoading } = useGetTrendsQuery();
  if (isLoading) return <h1>Loading</h1>;

  const handleNext = () => {
    if (carousel + 5 < data.results.length) {
      setCarousel(carousel + 1);
    }
  };

  const handlePrev = () => {
    if (carousel > 0) {
      setCarousel(carousel - 1);
    }
  };

  return (
    <Container sx={{ height: '100vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Input />
        <Button variant="outlined">Search</Button>
      </Box>
      <Box>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          Trending
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Button variant="outlined" onClick={handlePrev}>
          <ArrowBack />
        </Button>
        {data.results.slice(firstItem, lastItem).map((item) => (
          <Box key={item.id}>
            <img
              key={item.id}
              src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
              alt="poster"
            />
          </Box>
        ))}
        <Button variant="outlined" onClick={handleNext}>
          <ArrowForward />
        </Button>
      </Box>
    </Container>
  );
}

export default App;
