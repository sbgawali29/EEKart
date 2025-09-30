import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
describe('Not Found Component',()=>{

    test('render not found message',()=>{ 
        render(<NotFound/>);
         expect(screen.getByText(/Data not found/i)).toBeInTheDocument();
         expect(screen.getByText(/The resource you're looking for couldn't be loaded/i)).toBeInTheDocument();
    })

})