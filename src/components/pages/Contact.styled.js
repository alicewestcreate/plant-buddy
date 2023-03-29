import styled from "styled-components";

// Style object for the container div
export const ContainerStyle = styled("div")({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '0 1rem',
    marginTop: '4rem',

});

export const ContentStyle = styled("div")({
    display: 'flex',
    justifyContent: 'center',
    backdropFilter: 'blur(10px)'
})

export const IconContainer = styled("div")({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
})