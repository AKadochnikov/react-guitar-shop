import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';
import {APIRoute, BACKEND_URL, NameSpace} from '../../const';
import {Coupon} from '../../types/types';

export const couponApi = createApi({
  reducerPath: NameSpace.CouponApi,
  baseQuery: fetchBaseQuery({baseUrl: BACKEND_URL}),
  tagTypes: ['Coupon'],
  endpoints: (builder) => ({
    getCoupon: builder.mutation<number, Coupon>({
      query: (coupon: Coupon) => ({
        url: APIRoute.Coupon,
        method: 'POST',
        body: coupon,
      }),
      invalidatesTags: [{type: 'Coupon'}],
    }),
  }),
});

export const {useGetCouponMutation} = couponApi;
