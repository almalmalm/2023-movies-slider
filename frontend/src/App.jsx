import {
  Box,
  Button,
  Container,
  Input,
  Typography,
  Paper,
} from '@mui/material';
import { useState } from 'react';

import { useGetTrendsQuery } from './store/moviesApi';

function App() {
  const [carousel, setCarousel] = useState(4);

  let lastItem = carousel;
  let firstItem = carousel - 4;
  const { data, isLoading } = useGetTrendsQuery();
  if (isLoading) return <h1>Loading</h1>;

  console.log(firstItem, lastItem);
  const handleNext = () => {
    if (carousel < data.results.length) {
      setCarousel(carousel + 1);
    }
  };

  const handlePrev = () => {
    if (carousel - 4 > 0) {
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
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        <Button variant="outlined" onClick={handlePrev}>
          Prev
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
          Next
        </Button>
      </Box>
    </Container>
  );
}

export default App;
