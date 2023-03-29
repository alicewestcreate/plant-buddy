import styled from "styled-components";

// Style object for the container div
export const ContainerStyle = styled("div")({
    display: 'flex',
    justifyContent: 'center',
    padding: '0 1rem',
    marginTop: '4rem'
});

// Style object for the text content
export const TextStyle = styled("div")({
    // lineHeight: '10px',
    fontSize: '1.1rem',
    maxWidth: '800px',
    backdropFilter: 'blur(10px)'
})