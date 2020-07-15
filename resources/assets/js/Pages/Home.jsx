import React from 'react'
import Layout from '../Shared/Layout'

export default function Home({ greeting }) {
  return (
    <Layout title="Welcome">
      <h1>Welcome</h1>
      <p>Hello {greeting}, welcome to your first Inertia app!</p>
    </Layout>
  )
}