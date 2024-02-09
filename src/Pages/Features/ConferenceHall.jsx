import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ApiUrl } from '../../API/Api';

const LoadingContainer = styled.div`
  text-align: center;
  margin-top: 5em;
`;

const StyledContent = styled.div`
  text-align: justify;
  max-width: 100%;
  overflow: hidden;
  color:black;
`;

const AboutUs = () => {
    const location = useLocation();

    const [pagedata, setpageData] = useState();

    const [loading, setLoading] = useState(true);

    const searchParams = new URLSearchParams(location?.search);
    const CategoryFromUrlId = searchParams.get("from");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${ApiUrl}/get/Pages/${parseInt(CategoryFromUrlId)}`);
                setpageData(response?.data?.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [CategoryFromUrlId]);

    if (loading) {
        return <LoadingContainer><b>Loading...</b></LoadingContainer>;
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div>
                        <StyledContent dangerouslySetInnerHTML={{ __html: pagedata[0].content }} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
