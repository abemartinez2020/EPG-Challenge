import { useState, useEffect } from 'react';
import axios from 'axios';
import { Channel, Guide } from '../services/interfaces';

const useGuide = () => {
  const [channels, setChannels] = useState<Channel[]>();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    axios
      .get<Guide>(
        'https://mfwkweb-api.clarovideo.net/services/epg/channel?device_id=web&device_category=web&device_model=web&device_type=web&device_so=Chrome&format=json&device_manufacturer=generic&authpn=webclient&authpt=tfg1h3j4k6fd7&api_version=v5.93&region=guatemala&HKS=web61144bb49d549&user_id=54343080&date_from=20210812200256&date_to=20210813200256&quantity=7'
      )
      .then((request) => {
        const response = request.data.response;
        if (response?.channels !== undefined) setChannels(response.channels);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  return { channels, isLoading, error };
};

export default useGuide;
