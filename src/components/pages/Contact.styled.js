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
    flexDirection: 'row',
    gap: '3rem',
    justifyContent: 'center',
    backdropFilter: 'blur(10px)',
})
export const IconContainer = styled("div")({
    display: 'flex',
    flexDirection: 'row',
    gap: '1rem',
    justifyContent: 'center'
})

export const ImageContainer = styled("div")({
    width: "200px",
    height: "200px",
    borderRadius: "5px",
    overflow: "hidden",
    "& img": {
        width: "100%",
        height: "100%",
        objectFit: "cover"
    },
    maxWidth: "100%",
    maxHeight: "100%"
})

export const NameContainer = styled("div")({
    textAlign: 'center'
})