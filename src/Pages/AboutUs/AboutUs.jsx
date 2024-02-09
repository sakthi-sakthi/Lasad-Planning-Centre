import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { ApiUrl } from '../../API/Api';

const LoadingContainer = styled.div`
  text-align: center;
  margin-top: 5em;
`;

const NoDataContainer = styled.div`
  text-align: center;
  margin-top: 5em;
`;

const StyledContent = styled.div`
  text-align: justify;
  max-width: 100%;
  overflow: hidden;

  @media (max-width: 600px) {
    table, th, td {
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  }
`;

const AboutUs = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${ApiUrl}/get/Pages/1`);
        setData(response?.data?.data);
        console.log(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <LoadingContainer><b>Loading...</b></LoadingContainer>;
  }

  if (!data || data.length === 0) {
    return <NoDataContainer><b>No History Data Available</b></NoDataContainer>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className='mt-4'>
            <StyledContent dangerouslySetInnerHTML={{ __html: `${data[0].content}` }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
