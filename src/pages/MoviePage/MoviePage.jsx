import { useParams } from 'react-router-dom';

import Similar from '../../components/Similar';
import Frames from '../../components/Frames/';
import NavigationButton from '../../components/NavigationButton';
import Card from '../../components/Card/Card';

import { useMoviePageData } from '../../helpers/hooks/useMoviePageData';

const MoviePage = () => {
  const { id } = useParams()

  const { movie, staff, images, similar } = useMoviePageData(id)

  return (
    <>
      <NavigationButton align={'start'} urlNavigate={-1} text={'Назад'} />
      <Card movie={movie} staff={staff} />
      <Frames images={images} />
      <Similar similar={similar} />
    </>
  )
}

export default MoviePage
