import {makeFakeHotel} from '../utils/mocks';
import {renderHook} from '@testing-library/react-hooks';
import {Map} from 'leaflet';
import useMap from './use-map';

const fakeHotel = makeFakeHotel();

describe('Hook: useMap', () => {
  it('should return instanceof Map', () => {
    const { result } = renderHook(() => useMap({ current: document.createElement('div') }, fakeHotel.city));
    expect(result.current).toBeInstanceOf(Map);
  });
});
