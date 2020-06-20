import React, { useState, useEffect, useReducer } from 'react'
import './App.css'

type actionType = {
	type: 'increment' | 'decrement'
}

type State = {
	count: number
}

const reducer = (state: State, action: actionType) => {
	switch (action.type) {
		case 'increment':
			return { count: state.count + 1 }
		case 'decrement':
			return { count: state.count - 1 }
		default:
			throw new Error()
	}
}

const initialCount = 3

const init = (initialCount: number) => ({
	count: initialCount,
})

function App() {
	const [count, dispatch] = useReducer(reducer, initialCount, init)

	useEffect(() => {
		const timer = setInterval(() => {}, 1000)
		return () => {
			clearInterval(timer)
			console.log('我清楚了 ')
		}
	}, [])

	return <div>{count}</div>
}

export default App
