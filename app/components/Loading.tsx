import { Stack, Spinner, Flex } from "@chakra-ui/react"

export const Loading = () => {
    return (
        <Flex justifyContent='center' alignItems='center'>
            <Stack direction='row' spacing={4}>
                <Spinner size='xl' />
            </Stack>
        </Flex>
    )
}