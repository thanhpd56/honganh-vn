import React from "react";

import {
  Column,
  Row,
  Image,
  Button,
  Stack,
  Text,
  List,
  Grid,
  Line,
  Input,
  TextArea,
} from "components";

const Desktop2Page = () => {
  return (
    <>
      <Column className="bg-white_A700 font-aneklatin items-center justify-start mx-[auto] lg:pb-[15px] xl:pb-[17px] pb-[20px] 3xl:pb-[24px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] w-[100%]">
        <Row className="items-center justify-between lg:px-[37px] xl:px-[42px] px-[48px] 3xl:px-[57px] w-[100%]">
          <Image
            src={"images/img_image1.png"}
            className="lg:h-[44px] xl:h-[50px] h-[56px] 2xl:h-[57px] 3xl:h-[68px] object-contain w-[5%]"
            alt="image1"
          />
          <Button className="bg-gradient  font-semibold xl:ml-[1034px] ml-[1162.46px] 2xl:ml-[1163px] 3xl:ml-[1395px] lg:ml-[904px] xl:my-[3px] lg:my-[3px] my-[4px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius24 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-white_A700 tracking-ls1 w-[9%]">
            Liên hệ
          </Button>
        </Row>
        <Stack className="bg-gray_900 lg:h-[452px] xl:h-[516px] h-[580px] 2xl:h-[581px] 3xl:h-[697px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pb-[28px] xl:pb-[32px] pb-[36px] 3xl:pb-[43px] xl:pl-[100px] pl-[113px] 3xl:pl-[135px] lg:pl-[87px] lg:pt-[18px] xl:pt-[21px] pt-[24px] 3xl:pt-[28px] rounded-radius16 w-[93%]">
          <Image
            src={"images/img_rectangle874.png"}
            className="absolute lg:h-[405px] xl:h-[463px] h-[520px] 2xl:h-[521px] 3xl:h-[625px] inset-y-[0] my-[auto] object-contain right-[0] w-[70%]"
            alt="Rectangle874"
          />
          <Text className="absolute font-semibold lg:leading-[40px] xl:leading-[46px] leading-[52.00px] 2xl:leading-[52px] 3xl:leading-[62px] left-[0] lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-left text-white_A700 top-[18%] w-[45%]">
            Hệ thống bán hàng cho đại lý, cộng tác viên - không lưu kho, không
            cần vận hành
          </Text>
        </Stack>
        <Image
          src={"images/img_frame167.svg"}
          className="lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] object-contain rounded-radius16 w-[93%]"
          alt="Frame167"
        />
        <List
          className="lg:gap-[12px] xl:gap-[14px] gap-[16px] 3xl:gap-[19px] grid grid-cols-3 min-h-[auto] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[93%]"
          orientation="horizontal"
        >
          <Column className="bg-bluegray_900 items-start justify-center lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pt-[21px] xl:pt-[24px] pt-[28px] 3xl:pt-[33px] rounded-radius16 w-[100%]">
            <Text className="font-bold lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-white_A700 w-[auto]">
              1.000+
            </Text>
            <Column className="font-inter items-center w-[100%]">
              <Row className="items-start justify-between lg:pl-[24px] xl:pl-[28px] pl-[32px] 3xl:pl-[38px] lg:pr-[12px] xl:pr-[14px] pr-[16.33px] 2xl:pr-[16px] 3xl:pr-[19px] w-[100%]">
                <Text className="font-normal mb-[100px] 3xl:mb-[120px] lg:mb-[77px] xl:mb-[88px] xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 tracking-ls1 w-[auto]">
                  Đại lý
                </Text>
                <Image
                  src={"images/img_iconstore.svg"}
                  className="xl:h-[111px] h-[124px] 2xl:h-[125px] 3xl:h-[149px] lg:h-[97px] lg:ml-[174px] xl:ml-[199px] ml-[224px] 3xl:ml-[268px] object-contain opacity-op2 xl:w-[110px] w-[124px] 3xl:w-[148px] lg:w-[96px]"
                  alt="Iconstore"
                />
              </Row>
            </Column>
          </Column>
          <Column className="bg-indigo_A700 items-start justify-center lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pt-[21px] xl:pt-[24px] pt-[28px] 3xl:pt-[33px] rounded-radius16 w-[100%]">
            <Text className="font-bold lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-white_A700 w-[auto]">
              100+
            </Text>
            <Column className="font-inter items-center w-[100%]">
              <Row className="items-start justify-between lg:pl-[24px] xl:pl-[28px] pl-[32px] 3xl:pl-[38px] lg:pr-[12px] xl:pr-[14px] pr-[16.33px] 2xl:pr-[16px] 3xl:pr-[19px] w-[100%]">
                <Text className="font-normal mb-[100px] 3xl:mb-[120px] lg:mb-[77px] xl:mb-[88px] xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 tracking-ls1 w-[auto]">
                  Nhà cung cấp chính hãng
                </Text>
                <Image
                  src={"images/img_iconprovide.svg"}
                  className="xl:h-[111px] h-[124px] 2xl:h-[125px] 3xl:h-[149px] lg:h-[97px] lg:ml-[59px] xl:ml-[67px] ml-[76px] 3xl:ml-[91px] object-contain opacity-op3 xl:w-[110px] w-[124px] 3xl:w-[148px] lg:w-[96px]"
                  alt="Iconprovide"
                />
              </Row>
            </Column>
          </Column>
          <Column className="bg-pink_A400 items-start justify-center lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pt-[21px] xl:pt-[24px] pt-[28px] 3xl:pt-[33px] rounded-radius16 w-[100%]">
            <Text className="font-bold lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-white_A700 w-[auto]">
              10.000+
            </Text>
            <Column className="font-inter items-center w-[100%]">
              <Row className="items-start justify-between lg:pl-[24px] xl:pl-[28px] pl-[32px] 3xl:pl-[38px] lg:pr-[12px] xl:pr-[14px] pr-[16.33px] 2xl:pr-[16px] 3xl:pr-[19px] w-[100%]">
                <Text className="font-normal mb-[100px] 3xl:mb-[120px] lg:mb-[77px] xl:mb-[88px] xl:mt-[3px] lg:mt-[3px] mt-[4px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 tracking-ls1 w-[auto]">
                  Sản phẩm giá sỉ
                </Text>
                <Image
                  src={"images/img_iconbox.svg"}
                  className="xl:h-[111px] h-[124px] 2xl:h-[125px] 3xl:h-[149px] lg:h-[97px] lg:ml-[115px] xl:ml-[131px] ml-[148px] 3xl:ml-[177px] object-contain opacity-op4 xl:w-[110px] w-[124px] 3xl:w-[148px] lg:w-[96px]"
                  alt="Iconbox"
                />
              </Row>
            </Column>
          </Column>
        </List>
        <Stack className="bg-gray_100 lg:h-[417px] xl:h-[477px] h-[536px] 2xl:h-[537px] 3xl:h-[644px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] xl:pr-[100px] pr-[113px] 3xl:pr-[135px] lg:pr-[87px] lg:pt-[62px] xl:pt-[71px] pt-[80px] 3xl:pt-[96px] rounded-radius16 w-[93%]">
          <Image
            src={"images/img_image12.png"}
            className="absolute bottom-[0] lg:h-[255px] xl:h-[291px] h-[327px] 2xl:h-[328px] 3xl:h-[393px] left-[0] object-contain w-[49%]"
            alt="image12"
          />
          <Row className="absolute h-[max-content] inset-[0] items-start justify-center m-[auto] w-[91%]">
            <Text className="font-semibold lg:leading-[40px] xl:leading-[46px] leading-[52.00px] 2xl:leading-[52px] 3xl:leading-[62px] lg:mb-[171px] xl:mb-[195px] mb-[220px] 3xl:mb-[264px] lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-bluegray_900 text-left w-[29%]">
              Giá trị Hồng Anh mang lại cho các khách hàng
            </Text>
            <Grid className="lg:gap-[12px] xl:gap-[14px] gap-[16px] 3xl:gap-[19px] grid grid-cols-2 lg:ml-[101px] xl:ml-[115px] ml-[130px] 3xl:ml-[156px] w-[59%]">
              <Column className="bg-white_A700 items-start justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius16 w-[100%]">
                <Image
                  src={"images/img_frame36.svg"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                  alt="Frame36"
                />
                <Text className="font-semibold lg:leading-[21px] xl:leading-[24px] leading-[28.00px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 text-left w-[100%]">
                  Không lưu kho
                </Text>
              </Column>
              <Column className="bg-white_A700 items-start justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius16 w-[100%]">
                <Image
                  src={"images/img_frame37.svg"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                  alt="Frame37"
                />
                <Text className="font-semibold lg:leading-[21px] xl:leading-[24px] leading-[28.00px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 text-left w-[100%]">
                  Không cần vận hành
                </Text>
              </Column>
              <Column className="bg-white_A700 items-start justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius16 w-[100%]">
                <Image
                  src={"images/img_frame37_1.svg"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                  alt="Frame37"
                />
                <Text className="font-semibold lg:leading-[21px] xl:leading-[24px] leading-[28.00px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 text-left w-[100%]">
                  Đào tạo, cung cấp công cụ Marketing, CSKH
                </Text>
              </Column>
              <Column className="bg-white_A700 items-start justify-center lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius16 w-[100%]">
                <Image
                  src={"images/img_frame37_2.svg"}
                  className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] object-contain rounded-radius50 w-[auto]"
                  alt="Frame37"
                />
                <Text className="font-semibold lg:leading-[21px] xl:leading-[24px] leading-[28.00px] 2xl:leading-[28px] 3xl:leading-[33px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 text-left w-[100%]">
                  Hàng chính hãng, giá sỉ
                  <br />
                  ưu đãi cho đại lý
                </Text>
              </Column>
            </Grid>
          </Row>
        </Stack>
        <Column className="bg-indigo_A700 items-center justify-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:px-[132px] xl:px-[151px] px-[170px] 3xl:px-[204px] lg:py-[62px] xl:py-[71px] py-[80px] 3xl:py-[96px] rounded-radius16 w-[93%]">
          <Text className="font-semibold lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-white_A700 w-[auto]">
            Các đối tượng hướng tới
          </Text>
          <Row className="lg:gap-[12px] xl:gap-[14px] gap-[16px] 3xl:gap-[19px] grid grid-cols-3 items-center justify-center lg:mt-[49px] xl:mt-[56px] mt-[64px] 3xl:mt-[76px] px-[0] w-[100%]">
            <Column className="items-center rounded-radius16 w-[100%]">
              <Image
                src={"images/img_frame168.png"}
                className="lg:h-[168px] xl:h-[193px] h-[216px] 2xl:h-[217px] 3xl:h-[260px] object-cover rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                alt="Frame168"
              />
              <Text className="bg-white_A700 font-semibold lg:leading-[21px] xl:leading-[24px] leading-[28.00px] 2xl:leading-[28px] 3xl:leading-[33px] lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 text-center w-[100%]">
                Kỹ thuật viên máy tính
              </Text>
            </Column>
            <Column className="items-center rounded-radius16 w-[100%]">
              <Image
                src={"images/img_frame168_1.png"}
                className="lg:h-[168px] xl:h-[193px] h-[216px] 2xl:h-[217px] 3xl:h-[260px] object-cover rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                alt="Frame168"
              />
              <Text className="bg-white_A700 font-semibold lg:leading-[21px] xl:leading-[24px] leading-[28.00px] 2xl:leading-[28px] 3xl:leading-[33px] lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 text-center w-[100%]">
                Các đại lý máy tính
              </Text>
            </Column>
            <Column className="items-center rounded-radius16 w-[100%]">
              <Image
                src={"images/img_frame168_2.png"}
                className="lg:h-[168px] xl:h-[193px] h-[216px] 2xl:h-[217px] 3xl:h-[260px] object-cover rounded-tl-[16px] rounded-tr-[16px] w-[100%]"
                alt="Frame168"
              />
              <Text className="bg-white_A700 font-semibold lg:leading-[21px] xl:leading-[24px] leading-[28.00px] 2xl:leading-[28px] 3xl:leading-[33px] lg:p-[18px] xl:p-[21px] p-[24px] 3xl:p-[28px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_900 text-center w-[100%]">
                KOL Streamers
              </Text>
            </Column>
          </Row>
        </Column>
        <Column className="bg-gray_101 items-start justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pb-[64px] xl:pb-[73px] pb-[83px] 3xl:pb-[99px] lg:pt-[62px] xl:pt-[71px] pt-[80px] 3xl:pt-[96px] rounded-radius16 w-[93%]">
          <Column className="items-center 3xl:px-[119px] lg:px-[77px] xl:px-[88px] px-[99.5px] 2xl:px-[99px] w-[100%]">
            <Text className="font-semibold lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-bluegray_900 w-[auto]">
              Mô hình thương mại
            </Text>
            <Stack className="font-inter lg:h-[245px] xl:h-[280px] h-[314.5px] 2xl:h-[315px] 3xl:h-[378px] lg:mt-[49px] xl:mt-[56px] mt-[64px] 3xl:mt-[76px] w-[100%]">
              <Stack className="absolute lg:h-[245px] xl:h-[280px] h-[314.5px] 2xl:h-[315px] 3xl:h-[378px] inset-[0] w-[100%]">
                <Stack className="absolute lg:h-[245px] xl:h-[280px] h-[314.5px] 2xl:h-[315px] 3xl:h-[378px] left-[0] w-[94%]">
                  <Column className="absolute items-center justify-start left-[0] top-[0] w-[22%]">
                    <Image
                      src={"images/img_frame.png"}
                      className="lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] object-contain w-[95%]"
                      alt="Frame"
                    />
                    <Text className="font-bold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                      Cybersale Platform
                    </Text>
                    <Text className="font-normal leading-[160.00%] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-center w-[100%]">
                      Cung cấp hệ sinh thái hàng hóa và vận hành với giá sỉ
                    </Text>
                  </Column>
                  <Image
                    src={"images/img_vector4860.svg"}
                    className="absolute bottom-[0] h-[103px] 2xl:h-[104px] 3xl:h-[124px] lg:h-[81px] xl:h-[92px] object-contain right-[0] w-[89%]"
                    alt="Vector4860"
                  />
                </Stack>
                <Row className="absolute items-start justify-between right-[0] top-[0] w-[78%]">
                  <Row className="items-center justify-between w-[54%]">
                    <Button className="border border-indigo_A200 border-solid font-bold lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] lg:mb-[129px] xl:mb-[148px] mb-[167px] 3xl:mb-[200px] lg:mt-[14px] xl:mt-[16px] mt-[19px] 3xl:mt-[22px] lg:py-[4px] py-[5.8px] 2xl:py-[5px] xl:py-[5px] 3xl:py-[6px] rounded-radius100 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-indigo_A200 lg:w-[21px] xl:w-[24px] w-[28px] 3xl:w-[33px]">
                      1
                    </Button>
                    <Text className="font-normal leading-[160.00%] lg:mb-[115px] xl:mb-[131px] mb-[148px] 3xl:mb-[177px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left w-[39%]">
                      Cung cấp thông tin hàng hóa, tư liệu, đào tạo công cụ bán
                      hàng
                    </Text>
                    <Column className="items-center lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] w-[49%]">
                      <Image
                        src={"images/img_frame_1.png"}
                        className="lg:h-[111px] xl:h-[127px] h-[142px] 2xl:h-[143px] 3xl:h-[171px] object-contain w-[88%]"
                        alt="Frame"
                      />
                      <Text className="font-bold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                        Đại lý
                      </Text>
                      <Text className="font-normal lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                        Tiktoker, Youtuber, Streamer,...
                      </Text>
                    </Column>
                  </Row>
                  <Column className="items-start justify-start lg:mb-[21px] xl:mb-[24px] mb-[28px] 3xl:mb-[33px] lg:ml-[204px] xl:ml-[233px] ml-[263px] 3xl:ml-[315px] w-[16%]">
                    <Image
                      src={"images/img_frame_2.png"}
                      className="lg:h-[112px] xl:h-[129px] h-[144px] 2xl:h-[145px] 3xl:h-[173px] object-cover w-[100%]"
                      alt="Frame"
                    />
                    <Column className="items-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:px-[5px] xl:px-[6px] px-[7.5px] 2xl:px-[7px] 3xl:px-[9px] w-[100%]">
                      <Text className="font-bold lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_901 w-[auto]">
                        Khách hàng cuối
                      </Text>
                    </Column>
                  </Column>
                </Row>
              </Stack>
              <Column className="absolute items-start justify-start right-[14%] top-[14%] w-[64%]">
                <Column className="items-center w-[100%]">
                  <Row className="items-end justify-between w-[100%]">
                    <Line className="bg-indigo_A200 h-[2px] lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] w-[31%]" />
                    <Column className="items-center justify-start xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[214px] xl:ml-[245px] ml-[275.5px] 2xl:ml-[275px] 3xl:ml-[330px] w-[31%]">
                      <Row className="items-center justify-start w-[100%]">
                        <Button className="border border-indigo_A200 border-solid font-bold lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] lg:py-[5px] xl:py-[6px] py-[7.2px] 2xl:py-[7px] 3xl:py-[8px] rounded-radius100 lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-center text-indigo_A200 lg:w-[21px] xl:w-[24px] w-[28px] 3xl:w-[33px]">
                          2
                        </Button>
                        <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:my-[2px] lg:my-[2px] my-[3px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                          Marketing, bán hàng
                        </Text>
                      </Row>
                      <Line className="bg-indigo_A200 h-[2px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[97%]" />
                    </Column>
                  </Row>
                </Column>
                <Column className="items-end xl:mt-[11px] mt-[12.51px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] lg:pl-[413px] xl:pl-[472px] pl-[531.5px] 2xl:pl-[531px] 3xl:pl-[638px] lg:pr-[29px] xl:pr-[33px] pr-[38px] 3xl:pr-[45px] w-[100%]">
                  <Stack className="lg:h-[107px] xl:h-[122px] h-[136.49px] 2xl:h-[137px] 3xl:h-[164px] w-[100%]">
                    <Image
                      src={"images/img_group.svg"}
                      className="absolute lg:h-[107px] xl:h-[122px] h-[136.49px] 2xl:h-[137px] 3xl:h-[164px] inset-[0] object-cover w-[100%]"
                      alt="Group"
                    />
                    <Text className="absolute bottom-[19%] font-normal leading-[160.00%] not-italic right-[4%] rotate-[-3deg] lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 text-left w-[85%]">
                      Dựa trên brand của <br />
                      đại lý và do đại lý
                      <br />
                      sở hữu
                    </Text>
                  </Stack>
                </Column>
              </Column>
            </Stack>
          </Column>
          <Column className="font-inter items-end lg:mt-[15px] xl:mt-[17px] mt-[19.5px] 2xl:mt-[19px] 3xl:mt-[23px] lg:pl-[427px] xl:pl-[488px] pl-[549.5px] 2xl:pl-[549px] 3xl:pl-[659px] lg:pr-[351px] xl:pr-[401px] pr-[451.5px] 2xl:pr-[451px] 3xl:pr-[542px] w-[100%]">
            <Row className="items-center justify-end w-[100%]">
              <Button className="border border-indigo_A200 border-solid font-bold lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] lg:py-[4px] py-[5.8px] 2xl:py-[5px] xl:py-[5px] 3xl:py-[6px] rounded-radius100 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-center text-indigo_A200 lg:w-[21px] xl:w-[24px] w-[28px] 3xl:w-[33px]">
                3
              </Button>
              <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:my-[2px] lg:my-[2px] my-[3px] not-italic lg:text-[10px] xl:text-[12px] text-[14px] 3xl:text-[16px] text-bluegray_901 w-[auto]">
                Hoàn thiện đơn hàng & dịch vụ sau bán hàng
              </Text>
            </Row>
          </Column>
        </Column>
        <Stack className="xl:h-[1029px] h-[1156px] 2xl:h-[1157px] 3xl:h-[1389px] lg:h-[900px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[93%]">
          <Stack className="absolute xl:h-[1029px] h-[1156px] 2xl:h-[1157px] 3xl:h-[1389px] lg:h-[900px] inset-[0] w-[100%]">
            <Stack className="absolute 3xl:h-[1010px] lg:h-[654px] xl:h-[748px] h-[840.42px] 2xl:h-[842px] top-[0] w-[100%]">
              <Stack className="absolute bg-bluegray_902 lg:h-[436px] xl:h-[499px] h-[560px] 2xl:h-[561px] 3xl:h-[673px] lg:pb-[319px] xl:pb-[365px] pb-[411.3px] 2xl:pb-[411px] 3xl:pb-[493px] lg:pl-[375px] xl:pl-[429px] pl-[483px] 3xl:pl-[579px] lg:pr-[504px] xl:pr-[576px] pr-[648.2px] 2xl:pr-[648px] 3xl:pr-[778px] lg:pt-[40px] xl:pt-[46px] pt-[52.3px] 2xl:pt-[52px] 3xl:pt-[62px] rounded-radius16 top-[0] w-[100%]">
                <Image
                  src={"images/img_group437.svg"}
                  className="absolute 3xl:h-[116px] lg:h-[75px] xl:h-[86px] h-[96.4px] 2xl:h-[97px] left-[0] object-contain top-[0] w-[100%]"
                  alt="Group437"
                />
              </Stack>
              <Image
                src={"images/img_frame254.svg"}
                className="absolute bottom-[0] lg:h-[567px] xl:h-[648px] h-[728.42px] 2xl:h-[729px] 3xl:h-[875px] left-[0] object-contain w-[62%]"
                alt="Frame254"
              />
            </Stack>
            <Column className="absolute bg-white_A700 bottom-[0] items-center justify-center lg:px-[264px] xl:px-[302px] px-[340px] 3xl:px-[408px] lg:py-[62px] xl:py-[71px] py-[80px] 3xl:py-[96px] rounded-radius16 w-[100%]">
              <Text className="font-semibold lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-bluegray_900 w-[auto]">
                Các câu hỏi thường gặp
              </Text>
              <Input
                className="bg-transparent border-0 font-semibold p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] placeholder:text-bluegray_902 text-bluegray_902 w-[100%]"
                WrapClassName="2xl:pr-[3px] 3xl:mt-[76px] 3xl:pr-[3px] 3xl:py-[33px] border border-gray_300 border-solid flex lg:mt-[49px] lg:pr-[2px] lg:py-[21px] mt-[64px] pl-[0] pr-[3.2px] py-[28px] w-[100%] xl:mt-[56px] xl:pr-[2px] xl:py-[24px]"
                name="Làm thế nào để "
                placeholder="Làm thế nào để tôi có thể trở thành đại lý của Hồng Anh?"
                suffix={
                  <Image
                    src={"images/img_vector.svg"}
                    className="w-[17.6px] lg:w-[13px] xl:w-[15px] 2xl:w-[17px] 3xl:w-[21px] my-[auto]"
                    alt="Vector"
                  />
                }
              ></Input>
              <Row className="border border-gray_300 border-solid items-center justify-center lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                <Text className="font-semibold lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_902 w-[auto]">
                  Tôi có cần bỏ vốn khi bán hàng cho Hồng Anh không?
                </Text>
                <Image
                  src={"images/img_ctrldown1.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="ctrldown1"
                />
              </Row>
              <Row className="border border-gray_300 border-solid items-center justify-center lg:py-[18px] xl:py-[21px] py-[24px] 3xl:py-[28px] w-[100%]">
                <Text className="font-semibold lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] text-bluegray_902 w-[auto]">
                  Hàng trên Hồng Anh có phải chính hãng không?
                </Text>
                <Image
                  src={"images/img_ctrldown1_1.svg"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="ctrldown1"
                />
              </Row>
              <Input
                className="bg-transparent border-0 font-semibold p-[0] pl-[0] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] lg:text-[15px] xl:text-[17px] text-[20px] 3xl:text-[24px] placeholder:text-bluegray_902 text-bluegray_902 w-[100%]"
                WrapClassName="2xl:pr-[3px] 3xl:pr-[3px] 3xl:py-[33px] border border-gray_300 border-solid flex lg:pr-[2px] lg:py-[21px] pl-[0] pr-[3.2px] py-[28px] w-[100%] xl:pr-[2px] xl:py-[24px]"
                name="Hệ thống bán hà"
                placeholder="Hệ thống bán hàng của Hồng Anh hoạt động trên các nền tảng nào?"
                suffix={
                  <Image
                    src={"images/img_vector_1.svg"}
                    className="w-[17.6px] lg:w-[13px] xl:w-[15px] 2xl:w-[17px] 3xl:w-[21px] my-[auto]"
                    alt="Vector"
                  />
                }
              ></Input>
            </Column>
          </Stack>
          <Row className="absolute inset-x-[0] items-start justify-between mx-[auto] top-[7%] w-[83%]">
            <Text className="font-semibold lg:leading-[40px] xl:leading-[46px] leading-[52.00px] 2xl:leading-[52px] 3xl:leading-[62px] lg:mb-[230px] xl:mb-[263px] mb-[296px] 3xl:mb-[355px] lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-left text-white_A700 w-[29%]">
              Các đối tác của Hồng Anh
            </Text>
            <Image
              src={"images/img_frame48.svg"}
              className="lg:h-[312px] xl:h-[356px] h-[400px] 2xl:h-[401px] 3xl:h-[481px] lg:ml-[101px] xl:ml-[115px] ml-[130px] 3xl:ml-[156px] object-contain w-[59%]"
              alt="Frame48"
            />
          </Row>
        </Stack>
        <Stack className="font-inter 3xl:h-[1038px] lg:h-[672px] xl:h-[769px] h-[864px] 2xl:h-[865px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[93%]">
          <Stack className="absolute 3xl:h-[1038px] lg:h-[672px] xl:h-[769px] h-[864px] 2xl:h-[865px] inset-[0] w-[100%]">
            <div className="absolute bg-indigo_A700 lg:h-[511px] xl:h-[584px] h-[656px] 2xl:h-[657px] 3xl:h-[788px] rounded-radius16 top-[0] w-[100%]"></div>
            <Image
              src={"images/img_image13.png"}
              className="absolute bottom-[0] lg:h-[632px] xl:h-[723px] h-[812px] 2xl:h-[813px] 3xl:h-[975px] object-cover w-[100%]"
              alt="image13"
            />
            <Row className="absolute bg-white_A700 bottom-[0] items-center justify-start lg:pr-[266px] xl:pr-[305px] pr-[343px] 3xl:pr-[411px] lg:py-[31px] xl:py-[35px] py-[40px] 3xl:py-[48px] rounded-radius16 w-[100%]">
              <Image
                src={"images/img_image9.png"}
                className="h-[108px] 2xl:h-[109px] 3xl:h-[130px] lg:h-[84px] xl:h-[97px] xl:mb-[3px] lg:mb-[3px] mb-[4px] object-contain rounded-radius8 w-[108px] 3xl:w-[129px] lg:w-[84px] xl:w-[96px]"
                alt="image9"
              />
              <Image
                src={"images/img_frame11.png"}
                className="h-[108px] 2xl:h-[109px] 3xl:h-[130px] lg:h-[84px] xl:h-[97px] xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] object-contain w-[15%]"
                alt="Frame11"
              />
              <Column className="items-start lg:ml-[224px] xl:ml-[257px] ml-[289.23px] 2xl:ml-[289px] 3xl:ml-[347px] w-[21%]">
                <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 tracking-ls1 w-[auto]">
                  Giới thiệu
                </Text>
                <Text className="font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 tracking-ls1 w-[auto]">
                  Sản phẩm
                </Text>
                <Text className="font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 tracking-ls1 w-[auto]">
                  Chính sách
                </Text>
              </Column>
              <Column className="items-start lg:mb-[34px] xl:mb-[39px] mb-[44px] 3xl:mb-[52px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] w-[21%]">
                <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 tracking-ls1 w-[auto]">
                  Tin tức
                </Text>
                <Text className="font-normal lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-bluegray_600 tracking-ls1 w-[auto]">
                  Câu hỏi thường gặp
                </Text>
              </Column>
            </Row>
          </Stack>
          <Column className="absolute bottom-[2%] font-aneklatin items-start justify-start right-[1%] w-[90%]">
            <Column className="items-center w-[100%]">
              <Row className="items-start justify-between 3xl:pr-[116px] lg:pr-[75px] xl:pr-[86px] pr-[97px] w-[100%]">
                <Column className="bg-white_A700 items-start justify-start lg:py-[24px] xl:py-[28px] py-[32px] 3xl:py-[38px] rounded-radius16 w-[39%]">
                  <Text className="font-aneklatin font-semibold lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-bluegray_900 w-[auto]">
                    Đăng ký hợp tác
                  </Text>
                  <Input
                    className="bg-transparent border-0 font-inter font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_300 text-bluegray_300 tracking-ls1 w-[100%]"
                    WrapClassName="3xl:ml-[38px] 3xl:mt-[38px] bg-gray_101 lg:ml-[24px] lg:mt-[24px] ml-[32px] mt-[32px] rounded-radius8 w-[85%] xl:ml-[28px] xl:mt-[28px]"
                    name="Họ tên"
                    placeholder="Họ tên"
                  ></Input>
                  <Input
                    className="bg-transparent border-0 font-inter font-normal not-italic lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_300 text-bluegray_300 tracking-ls1 w-[100%]"
                    WrapClassName="3xl:ml-[38px] 3xl:mt-[19px] bg-gray_101 lg:ml-[24px] lg:mt-[12px] ml-[32px] mt-[16px] rounded-radius8 w-[85%] xl:ml-[28px] xl:mt-[14px]"
                    name="Email"
                    placeholder="Email"
                  ></Input>
                  <TextArea
                    className="bg-gray_101 border-0 font-inter font-normal lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:pl-[12px] xl:pl-[14px] pl-[16px] 3xl:pl-[19px] lg:py-[15px] xl:py-[17px] py-[20px] 3xl:py-[24px] rounded-radius8 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-bluegray_300 text-bluegray_300 tracking-ls1 w-[85%]"
                    name="Group32"
                    placeholder="Nội dung"
                  ></TextArea>
                  <Column className="font-aneklatin items-center lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] lg:px-[24px] xl:px-[28px] px-[32px] 3xl:px-[38px] w-[100%]">
                    <Button className="bg-gradient1  font-semibold lg:py-[14px] xl:py-[16px] py-[19px] 3xl:py-[22px] rounded-radius64 lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-center text-gray_101 tracking-ls1 w-[100%]">
                      Gửi thông tin
                    </Button>
                  </Column>
                </Column>
                <Column className="items-start justify-end lg:mb-[211px] xl:mb-[241px] mb-[272px] 3xl:mb-[326px] lg:ml-[101px] xl:ml-[116px] ml-[131px] 3xl:ml-[157px] xl:pr-[101px] pr-[114px] 3xl:pr-[136px] lg:pr-[88px] lg:pt-[24px] xl:pt-[28px] pt-[32px] 3xl:pt-[38px] w-[49%]">
                  <Text className="font-semibold lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                    Thông tin liên hệ
                  </Text>
                  <Row className="font-inter items-start justify-start lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                    <Image
                      src={"images/img_pin31.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[18px] xl:mb-[21px] mb-[24px] 3xl:mb-[28px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="pin31"
                    />
                    <Text className="font-normal lg:leading-[18px] xl:leading-[21px] leading-[24.00px] 2xl:leading-[24px] 3xl:leading-[28px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-left text-white_A700 tracking-ls1 w-[93%]">
                      43 Hoàng Văn Thái, phường Khương Đình,
                      <br />
                      quận Thanh Xuân, Hà Nội
                    </Text>
                  </Row>
                  <Row className="font-inter items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Image
                      src={"images/img_phone1.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="phone1"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 tracking-ls1 w-[auto]">
                      0945416666
                    </Text>
                  </Row>
                  <Row className="font-inter items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                    <Image
                      src={"images/img_letter1.svg"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="letter1"
                    />
                    <Text className="font-normal lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 tracking-ls1 w-[auto]">
                      info@honganh.vn
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
            <Image
              src={"images/img_image9_1.png"}
              className="lg:h-[148px] xl:h-[170px] h-[190px] 2xl:h-[191px] 3xl:h-[229px] ml-[1025px] 3xl:ml-[1230px] lg:ml-[797px] xl:ml-[911px] lg:mt-[60px] xl:mt-[69px] mt-[78px] 3xl:mt-[93px] object-contain rounded-radius8 lg:w-[147px] xl:w-[169px] w-[190px] 3xl:w-[228px]"
              alt="image9"
            />
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default Desktop2Page;
