import { gql } from '@apollo/client';

export const QUERY_PROFILE =  gql`
    {
        user{
            _id
            first_name
            last_name
            email
        }
    }
`