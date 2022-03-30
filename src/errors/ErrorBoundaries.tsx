import type { ErrorInfo, ReactNode } from 'react'
import  { Component } from 'react'
import { Box } from "@mui/material";

interface Props {
  children?: ReactNode
}

interface State {
  error: Error | null
  info: ErrorInfo | null
}
class ErrorBoundary extends Component<Props, State> {
  state = {
    error: null,
    info: null,
  }

  componentDidCatch(error: Error, info: ErrorInfo): void {
    this.setState({ error, info })
  }

  render(): ReactNode {
    const { error } = this.state
    if (error) {
      return <ErrorBoundaryCallComponent />
    }
    return this.props.children
  }
}

export default ErrorBoundary


const ErrorBoundaryCallComponent = () => (
      <Box sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: "1rem",
        color: 'primary.main',
      }}>
        Bounderies and personal space bud.
      </Box>

)