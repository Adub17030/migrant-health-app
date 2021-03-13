import React, { Component, useState, useEffect, useRef } from "react";
// import {Line} from 'react-chartjs-2';
import moment from 'moment'
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Brush, AreaChart, Area
  } from 'recharts';
import {

    Box,
    Button,
    Flex,
    HStack,
  } from '@chakra-ui/react';



class StockChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };

        this.convertToTime= this.convertToTime.bind(this);
        this.randomInteger = this.randomInteger.bind(this);
        this.createDataPoint = this.createDataPoint.bind(this);
        this.genArray = this.genArray.bind(this);
    }

    convertToTime(time){
        return moment(time).format("h:mm a")
    }

    randomInteger(min, max) {
        return (Math.floor(Math.random() * (max - min + 1)) + min);
      }

    createDataPoint(temp){
        var datapoint = {
            "time": moment().format('hh:mm'),
            "temp": temp
        }
        return datapoint;
    }
    
    genArray = (length) => {
        let arr = []
        for(let i = 0; i < length+1; i++){
            arr.push(this.createDataPoint(this.randomInteger(50,70)))
        }
        this.setState({data: arr})
        return arr;
    }
  


    render() { 
        
        return (
        <Box mt={10}>
            {/* <Line data={liveData} options={options}/> */}
        {/* <ResponsiveContainer> */}

        <AreaChart
          width={900}
          height={350}
          data={this.state.data}
          margin={{
            
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}

        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.75}/>
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
          </linearGradient>
        </defs>

          <XAxis dataKey="time" stroke="white" axisLine={{ stroke: '#FFFFFF' }}/>
          <YAxis type="number" stroke="white" domain={['dataMin * 0.8', 'dataMax * 1.1']} axisLine={{ stroke: '#FFFFFF' }} />
          <Tooltip cursor={{ stroke: 'gray', strokeWidth: 2 }} contentStyle={{color:'blue'}} itemStyle={{color:'blue'}} />
          <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="url(#colorUv)" activeDot={{ r: 8 }} strokeWidth={2}/>
        </AreaChart>


            {/* <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >

      
        <XAxis dataKey="time" stroke="white" axisLine={{ stroke: '#FFFFFF' }}/>
        <YAxis type="number" stroke="white" domain={['dataMin', 'dataMax * 0.2']} axisLine={{ stroke: '#FFFFFF' }} />
        <Tooltip cursor={{ stroke: 'gray.900', strokeWidth: 2 }} contentStyle={{color:'blue.200'}} itemStyle={{color:'blue.200'}}/>
        <Legend />
        <Line type="linear" dataKey="price" stroke="#FFFFFF" activeDot={{ r: 8 }} strokeWidth={2} />
        <Brush/>
      </LineChart> */}

      {/* </ResponsiveContainer> */}
      <HStack ml="5rem" direction="rows" spacing={4} align="center">
      <Button>Toggle Live Feed</Button>
      <Button onClick={() => {this.genArray(10)}}>1D</Button>
      <Button onClick={() => {this.genArray(10)}}>5D</Button>
      <Button onClick={() => {this.genArray(10)}}>1M</Button>
      <Button onClick={() => {this.genArray(10)}}>6M</Button>
      <Button onClick={() => {this.genArray(10)}}>1Y</Button>
      <Button onClick={() => {this.genArray(10)}}>ALL</Button>
      </HStack>
        </Box>
    );
    }
}

export default StockChart;