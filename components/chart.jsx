import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import apiService from '../api/apiService';
import {
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLine,
  VictoryCandlestick,
  createContainer,
} from 'victory-native';

export default function () {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchData = async () =>{
            setTimeout(()=>console.log('waiting'), 3000)
            const res = await apiService.getCompanyFromAPI('F')
            /*
            //companyId
            //intraDayData1m
            //intraDayData5m
            //eodData
            */
            console.log('Got my Datas', Object.keys(res));
            setData(res);
        }
 fetchData();
      
    }, [])

    return (
        <View>
            {data ? <Text>{JSON.stringify(Object.keys(data))}</Text> : <Text>No Data.....{JSON.stringify(data.length)}</Text>}
            </View>

    )
}