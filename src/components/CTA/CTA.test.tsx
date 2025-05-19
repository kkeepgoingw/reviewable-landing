import { render, screen } from '@testing-library/react'
import CTA from './CTA'

describe('CTA 컴포넌트', () => {
  it('버튼 텍스트가 제대로 렌더링된다', () => {
    render(<CTA />)
    expect(screen.getByText('지금 시작하기')).toBeInTheDocument()
  })
})
