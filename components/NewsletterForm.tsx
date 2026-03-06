'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface NewsletterFormProps {
  title?: string
}

export default function NewsletterForm({
  title = 'Get 10% Off Your First Order',
}: Partial<NewsletterFormProps>) {
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const valid = /\S+@\S+\.\S+/.test(email)
    if (!valid) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSuccess(true)
    setEmail('')
  }

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-border bg-card/80 p-5">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="mb-4 text-sm text-muted-foreground">Weekly drops, sale alerts, and style inspiration.</p>
      <div className="flex gap-2">
        <Input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
        <Button type="submit" className="bg-[#E63946] text-white hover:bg-[#cf3440]">Subscribe</Button>
      </div>
      {error ? <p className="mt-2 text-xs text-red-500">{error}</p> : null}
      {success ? <p className="mt-2 text-xs text-green-500">Subscribed! Welcome to StyleVault.</p> : null}
    </form>
  )
}
